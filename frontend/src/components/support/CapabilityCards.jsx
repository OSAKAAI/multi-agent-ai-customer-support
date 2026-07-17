const capabilities = [
  {
    title: "Recommend Products",
    icon: "🎮",
  },
  {
    title: "Gaming Setup",
    icon: "🖥️",
  },
  {
    title: "Track Order",
    icon: "📦",
  },
  {
    title: "Technical Support",
    icon: "🛠️",
  },
];

function CapabilityCards() {
  return (
    <div className="grid grid-cols-2 gap-3 mb-5">
      {capabilities.map((item) => (
        <button
          key={item.title}
          className="flex items-center gap-3 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 transition-all duration-300 hover:border-orange-500 hover:bg-neutral-700"
        >
          <span className="text-xl">{item.icon}</span>

          <span className="text-sm font-medium text-white">
            {item.title}
          </span>
        </button>
      ))}
    </div>
  );
}

export default CapabilityCards;