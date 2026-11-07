import { motion } from "framer-motion"

const STAMP_BORDERS = {
    authentic: "border-green-600",
    fake: "border-red-600",
}

const STAMP_LABELS = {
    authentic: "AUTÉNTICO",
    fake: "FALSO",
}

const STAMP_LABEL_STYLES = {
    authentic: "border-green-500 text-green-500",
    fake: "border-red-500 text-red-500",
}

const buttonClass =
    "border border-stone-600 px-3 py-1 text-sm transition hover:border-amber-500 hover:text-amber-400"

const DocumentCard = ({ doc, stamp, onStamp, alerts = [] }) => {
    return (
        <article
            className={`border-2 bg-stone-900 p-4 ${STAMP_BORDERS[stamp] ?? "border-stone-700"}`}
        >
            <h3 className="font-bold">{doc.titulo}</h3>
            <p className="text-xs text-stone-500">{doc.fecha}</p>
            <p className="mt-3">{doc.texto}</p>

            {alerts.map((text) => (
                <p
                    key={text}
                    className="mt-3 border-l-2 border-amber-500 pl-3 text-sm italic text-amber-400"
                >
                    {text}
                </p>
            ))}

            <div className="mt-4 flex items-center gap-3">
                <button className={buttonClass} onClick={() => onStamp(doc.id, "authentic")}>
                    Sellar auténtico
                </button>
                <button className={buttonClass} onClick={() => onStamp(doc.id, "fake")}>
                    Sellar falso
                </button>

                {stamp && (
                    <motion.span
                        key={stamp}
                        initial={{ scale: 2.5, opacity: 0, rotate: -20 }}
                        animate={{ scale: 1, opacity: 1, rotate: -6 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        className={`ml-auto border-2 px-2 py-1 text-sm font-bold ${STAMP_LABEL_STYLES[stamp]}`}
                    >
                        {STAMP_LABELS[stamp]}
                    </motion.span>
                )}
            </div>
        </article>
    )
}

export default DocumentCard