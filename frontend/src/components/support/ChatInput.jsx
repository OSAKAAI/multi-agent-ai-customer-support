function ChatInput({
  input,
  setInput,
  handleSend,
  loading,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={input}
          disabled={loading}
          placeholder="Ask AXIOM AI anything..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-full border border-gray-300 px-5 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />

        <button
          onClick={() => handleSend()}
          disabled={loading}
          className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;