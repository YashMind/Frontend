import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import toast from "react-hot-toast";
import { FaMicrophone, FaRegStopCircle, FaSpinner } from "react-icons/fa";

interface MicrophoneRecorderProps {
  setTranscript: (text: string) => void;
  transcript: string;
  isRecording: boolean;
  setIsRecording: Dispatch<SetStateAction<boolean>>;
}

const MicrophoneRecorder: React.FC<MicrophoneRecorderProps> = ({
  transcript,
  setTranscript,
  isRecording,
  setIsRecording,
}) => {
  const [blobURL, setBlobURL] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [volume, setVolume] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const transcriptRef = useRef<string>(transcript);

  // Sync transcript ref with state
  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  useEffect(() => {
    // @ts-ignore
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript + " ";
          }
        }
        const prev = transcriptRef.current.trim();
        const curr = finalTranscript.trim();
        const updated = prev && curr ? `${prev} ${curr}` : prev || curr;
        // Use ref instead of state directly to get latest value
        setTranscript(updated);
      };

      recognition.onerror = (event: any) => {
        console.warn("Speech recognition error:", event.error);

        if (event.error === "not-allowed") {
          toast.error("Microphone access denied. Please allow microphone permission.");
          stopRecording();
        } else if (event.error === "aborted") {
          // Optional: only log or toast if needed
          console.info("Speech recognition was aborted.");
        } else {
          toast.error(`Speech recognition error: ${event.error}`);
          stopRecording();
        }
      };


      recognitionRef.current = recognition;
    }

    return () => {
      stopAll();
    };
  }, [setTranscript]);

  const stopAll = () => {
    if (recognitionRef.current && recognitionRef.current.running) {
      recognitionRef.current.stop();
    }
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }
    if (audioContextRef.current?.state !== "closed") {
      audioContextRef.current?.close();
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const startVolumeMeter = (stream: MediaStream) => {
    // Cleanup previous animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    audioContextRef.current = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const analyser = audioContextRef.current.createAnalyser();
    analyser.fftSize = 32;
    analyserRef.current = analyser;

    const source = audioContextRef.current.createMediaStreamSource(stream);
    source.connect(analyser);

    const tick = () => {
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b) / dataArray.length;
      setVolume(avg / 255);
      animationRef.current = requestAnimationFrame(tick);
    };
    tick();
  };

  const startRecording = async () => {
    try {
      audioChunksRef.current = [];
      setVolume(0);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      startVolumeMeter(stream);

      if (recognitionRef.current) {
        recognitionRef.current.start();
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        setBlobURL(URL.createObjectURL(audioBlob));
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      toast.error(error.message);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    setIsProcessing(true);

    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }

    if (recognitionRef.current && recognitionRef.current.running) {
      recognitionRef.current.stop();
    }

    if (
      audioContextRef.current &&
      audioContextRef.current.state !== "closed"
    ) {
      audioContextRef.current.close().catch((err) => {
        console.warn("Error closing AudioContext:", err);
      });
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setIsRecording(false);
    setIsProcessing(false);
  };


  return (
    <div className="flex flex-col items-center justify-center space-y-1 bg-white rounded-lg ">
      <div className="relative">
        <button
          className={`flex items-center justify-center w-8 h-8 rounded-full text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer`}
          onClick={isRecording ? stopRecording : startRecording}
          disabled={isProcessing}
          type="button"
        >
          {isProcessing ? (
            <FaSpinner className="animate-spin h-5 w-5 text-green-700" />
          ) : isRecording ? (
            <FaMicrophone className="h-5 w-5 text-red-500 animate-pulse" />
          ) : (
            <FaMicrophone className="h-5 w-5 text-blue-500" />
          )}
        </button>
      </div>

      {!recognitionRef.current && (
        <p className="text-xs text-yellow-600 mt-2 sr-only">
          Note: Live transcription works best in Chrome and Edge browsers
        </p>
      )}
    </div>
  );
};

export default MicrophoneRecorder;
