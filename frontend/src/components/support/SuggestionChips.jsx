const suggestions = [
  "🎮 Recommend a Gaming Mouse",
  "⌨️ Best Mechanical Keyboard",
  "🖥 Build a Gaming Setup",
  "📦 Track My Order",
  "🛠 Technical Support",
  "🔄 Warranty & Returns",
];

function SuggestionChips({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 border-b border-gray-200 bg-gray-50 p-6">
      {suggestions.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="rounded-full border border-orange-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-orange-500 hover:text-white"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default SuggestionChips;