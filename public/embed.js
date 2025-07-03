(function () {
  if (window !== window.parent) return;

  const scripts = document.getElementsByTagName("script");
  let BOT_ID = null;
  let CUSTOM_ICON = null;
  let POPUP_SOUND = null;

  // Extract configuration from script tag attributes
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (script.src.includes("embed.js")) {
      BOT_ID = script.getAttribute("data-bot-id") || null;
      CUSTOM_ICON = script.getAttribute("data-icon") || null;
      POPUP_SOUND = script.getAttribute("data-sound") || null;
      break;
    }
  }

  if (!BOT_ID) return;

  const CHAT_IFRAME_URL = `https://yashraa.ai/embed/${BOT_ID}`;

  // Create chat container
  const createChatElements = () => {
    // Remove existing elements if any
    const existingIframe = document.querySelector("#chatbot-iframe");
    const existingBubble = document.querySelector("#chatbot-bubble");
    if (existingIframe) existingIframe.remove();
    if (existingBubble) existingBubble.remove();

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.id = "chatbot-iframe";
    iframe.src = CHAT_IFRAME_URL;
    Object.assign(iframe.style, {
      position: "fixed",
      bottom: "90px",
      right: "20px",
      width: "400px",
      height: "600px",
      border: "none",
      zIndex: "100000",
      borderRadius: "16px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      display: "none",
      transform: "translateY(20px)",
      opacity: "0",
      transition: "all 0.3s ease-out"
    });
    document.body.appendChild(iframe);

    // Create bubble
    const bubble = document.createElement("div");
    bubble.id = "chatbot-bubble";

    // Set custom icon or default
    if (CUSTOM_ICON) {
      if (CUSTOM_ICON.match(/\.(jpeg|jpg|gif|png|svg|webp)$/i)) {
        bubble.innerHTML = `<img src="${CUSTOM_ICON}" style="width:55px;height:55px;object-fit:contain" alt="Chat">`;
      } else {
        bubble.innerHTML = CUSTOM_ICON;
      }
    } else {
      bubble.innerHTML = "💬";
    }

    Object.assign(bubble.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#007bff",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      cursor: "pointer",
      zIndex: "100001",
      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      transform: "scale(0)",
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    });

    // Audio handling
    let audio = null;
    let audioPlayed = false;

    if (POPUP_SOUND) {
      audio = new Audio(POPUP_SOUND);
      audio.preload = "auto";
      audio.volume = 0.7;
    }

    // Animate bubble entrance with sound
    setTimeout(() => {
      bubble.style.transform = "scale(1)";

      // Add continuous gentle pulse
      bubble.style.animation = "pulse 2s infinite";

      // Play sound when bubble appears (first time only)
      if (audio && !audioPlayed) {
        // Try to play immediately (may be blocked by browser)
        audio.play()
          .then(() => {
            audioPlayed = true;
          })
          .catch(e => {
            console.log("Initial sound blocked, will play on first interaction");

            // Fallback: Play on first user interaction
            const playOnInteraction = () => {
              if (!audioPlayed) {
                audio.play()
                  .then(() => {
                    audioPlayed = true;
                    bubble.removeEventListener('mouseover', playOnInteraction);
                    bubble.removeEventListener('click', playOnInteraction);
                  })
                  .catch(e => console.log("Still blocked:", e));
              }
            };

            bubble.addEventListener('mouseover', playOnInteraction, { once: true });
            bubble.addEventListener('click', playOnInteraction, { once: true });
          });
      }
    }, 800);

    // Add pulse animation style
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 2px 10px rgba(0,0,0,0.3); }
        50% { transform: scale(1.05); box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        100% { transform: scale(1); box-shadow: 0 2px 10px rgba(0,0,0,0.3); }
      }
    `;
    document.head.appendChild(style);

    // Toggle iframe visibility (without sound)
    bubble.addEventListener("click", function () {
      if (iframe.style.display === "none") {
        iframe.style.display = "block";
        setTimeout(() => {
          iframe.style.transform = "translateY(0)";
          iframe.style.opacity = "1";
        }, 10);
      } else {
        iframe.style.transform = "translateY(20px)";
        iframe.style.opacity = "0";
        setTimeout(() => {
          iframe.style.display = "none";
        }, 300);
      }
    });

    document.body.appendChild(bubble);

    // Handle messages from iframe
    iframe.addEventListener("load", function () {
      iframe.contentWindow.addEventListener("message", (event) => {
        if (event.data.type === "playSound" && event.data.soundUrl) {
          const msgAudio = new Audio(event.data.soundUrl);
          msgAudio.volume = 0.7;
          msgAudio.play().catch(e => console.log("Message sound failed:", e));
        }
      });
    });

    return { iframe, bubble };
  };

  // Initialize chat
  createChatElements();
})();