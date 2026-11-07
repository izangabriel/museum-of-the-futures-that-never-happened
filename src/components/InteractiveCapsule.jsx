import { useState } from "react"

const InteractiveCapsule = ({ components }) => {
    const [activeId, setActiveId] = useState(null)
    const active = components.find((c) => c.id === activeId)

    return (
        <div>
            <div className="flex overflow-hidden rounded-full border-2 border-amber-700">
                {components.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => setActiveId(activeId === c.id ? null : c.id)}
                        aria-pressed={activeId === c.id}
                        className={`flex-1 border-r border-amber-700 px-3 py-6 text-sm transition last:border-r-0 ${activeId === c.id
                            ? "bg-amber-500 text-stone-950"
                            : "bg-amber-900/40 text-amber-200 hover:bg-amber-800/60"
                            }`}
                    >
                        {c.nombre}
                    </button>
                ))}
            </div>

            <div className="mt-4 min-h-[6rem] border border-stone-700 bg-stone-900 p-4">
                {active ? (
                    <>
                        <h3 className="font-bold text-amber-500">{active.nombre}</h3>
                        <p className="mt-2">{active.descripcion}</p>
                    </>
                ) : (
                    <p className="text-stone-500">
                        Selecciona una parte para inspeccionarla.
                    </p>
                )}
            </div>
        </div>
    )
}

export default InteractiveCapsule