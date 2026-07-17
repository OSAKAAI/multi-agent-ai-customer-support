import { useState } from "react";
import HeroSection from "./HeroSection";
import SuggestionChips from "./SuggestionChips";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { sendMessage } from "../../services/chatService";

function AIExperience() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Welcome to AXIOM Support!\n\nI'm here to help with:\n\n• 🎮 Product recommendations\n• 📦 Order tracking\n• 🛠 Technical support\n• 🔄 Warranty & returns\n\nHow can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (customMessage) => {
    const message = (customMessage || input).trim();

    if (!message || loading) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(message);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply,
        },
      ]);
    } catch (error) {
      console.error("AI Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ Sorry, I couldn't connect to the AI server. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

        <HeroSection />

        <SuggestionChips onSelect={handleSend} />

        <ChatWindow
          messages={messages}
          loading={loading}
        />

        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          loading={loading}
        />

      </div>
    </div>
  );
}

export default AIExperience;