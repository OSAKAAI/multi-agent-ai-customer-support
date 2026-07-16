import { useState } from "react";
import { sendMessage } from "../../services/chatService";

function AIChat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm AXIOM AI. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const currentMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentMessage,
      },
    ]);

    setInput("");

    try {
      setLoading(true);

      const aiResponse = await sendMessage(currentMessage);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiResponse,
        },
      ]);
    } catch (error) {
      console.error("========== AI CHAT ERROR ==========");
      console.error(error);

      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Response:", error.response.data);
      } else if (error.request) {
        console.error("No response received from backend.");
        console.error(error.request);
      } else {
        console.error("Request Error:", error.message);
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Unable to connect to the AI server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto rounded-xl border border-orange-500 p-6 bg-neutral-900 text-white">
      <h2 className="text-xl font-bold mb-4">
        AXIOM AI Assistant
      </h2>

      <div className="h-96 overflow-y-auto border rounded-lg p-4 mb-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === "user"
                  ? "bg-orange-500 text-black"
                  : "bg-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-gray-400">
            AXIOM AI is typing...
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          placeholder="Ask about our products..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 rounded-lg border px-4 py-2 text-white bg-neutral-800 outline-none"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-black hover:bg-orange-400 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AIChat;