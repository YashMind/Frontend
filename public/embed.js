(function () {
    console.log("👀 Script loaded");
  
    // If the script is running inside the iframe, return early to avoid creating another bubble
    if (window !== window.parent) {
      console.log("🚫 Inside iframe. Skipping bubble creation.");
      return;
    }
  
    // Find the script tag with data-bot-id
    const scripts = document.getElementsByTagName("script");
    let BOT_ID = null;
  
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      if (script.src.includes("embed.js") && script.getAttribute("data-bot-id")) {
        BOT_ID = script.getAttribute("data-bot-id");
        break;
      }
    }
  
    console.log("🤖 Bot ID:", BOT_ID);
    if (!BOT_ID) return;
  
    const CHAT_IFRAME_URL = `http://localhost:3000/embed/${BOT_ID}`;
  
    // Check if iframe already exists
    let iframe = document.querySelector("#chatbot-iframe");
    if (!iframe) {
      // Create the iframe if it doesn't exist
      iframe = document.createElement("iframe");
      iframe.id = "chatbot-iframe"; // Assign an ID for later reference
      iframe.src = CHAT_IFRAME_URL;
      iframe.style.position = "fixed";
      iframe.style.bottom = "90px";
      iframe.style.right = "20px";
      iframe.style.width = "400px";
      iframe.style.height = "600px";
      iframe.style.border = "none";
      iframe.style.zIndex = "100000";
      iframe.style.borderRadius = "16px";
      iframe.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
      iframe.style.display = "none"; // Initially hidden
      document.body.appendChild(iframe);
    }
  
    // Create the external chat bubble (below the iframe) only in the parent window
    const bubble = document.createElement("div");
    bubble.innerText = "💬";
    bubble.style.position = "fixed";
    bubble.style.bottom = "20px";
    bubble.style.right = "20px";
    bubble.style.width = "50px";
    bubble.style.height = "50px";
    bubble.style.borderRadius = "50%";
    bubble.style.background = "#007bff";
    bubble.style.color = "white";
    bubble.style.display = "flex";
    bubble.style.alignItems = "center";
    bubble.style.justifyContent = "center";
    bubble.style.fontSize = "24px";
    bubble.style.cursor = "pointer";
    bubble.style.zIndex = "100001";
    bubble.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
  
    // Toggle iframe visibility when external bubble is clicked
    bubble.onclick = function () {
      iframe.style.display = iframe.style.display === "none" ? "block" : "none";
    };
  
    // Append the external bubble to the body
    document.body.appendChild(bubble);
  
    // Add an event listener to detect user interaction with the iframe (chatbot)
    iframe.onload = function () {
      const iframeWindow = iframe.contentWindow;
  
      // Ensure that the iframe is loaded before trying to access the content inside
      iframeWindow.addEventListener("message", (event) => {
        if (event.data === "user_interaction") {
          // If user interacted with the chatbot, hide the bubble inside the iframe
          iframe.style.display = "none"; // Hide the iframe entirely
        }
      });
    };
  })();
  