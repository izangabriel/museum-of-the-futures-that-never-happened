const Tabs = ({ tabs, active, onChange }) => {
    return (
        <div className="mt-8 flex border-b border-stone-700">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    aria-pressed={active === tab.id}
                    className={`px-4 py-2 text-sm transition ${active === tab.id
                        ? "border-b-2 border-amber-500 text-amber-500"
                        : "text-stone-400 hover:text-stone-200"
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

export default Tabs