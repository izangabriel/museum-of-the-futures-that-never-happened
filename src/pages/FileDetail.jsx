import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import { objetos } from "../data/objetos"
import { countResolved, getOutcome, getAlerts } from "../utils/contradictions"
import Tabs from "../components/Tabs"
import InteractiveCapsule from "../components/InteractiveCapsule"
import DocumentCard from "../components/DocumentCard"
import TestimonyCard from "../components/TestimonyCard"
import { useStamps } from "../contexts/StampsContext"

const TABS = [
    { id: "components", label: "Componentes" },
    { id: "documents", label: "Documentos" },
    { id: "testimonies", label: "Testimonios" },
]

const FileDetail = () => {
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState("components")
    const { stamps, handleStamp } = useStamps()

    const object = objetos.find((item) => item.id === id)

    if (!object) {
        return <Page404 />
    }

    const resolvedCount = countResolved(object, stamps)

    return (
        <section>
            <Link to="/archivo" className="text-sm text-stone-400 hover:text-amber-400">
                ← Volver al archivo
            </Link>

            <p className="mt-6 text-xs text-stone-400">
                {object.lineaTemporal} · {object.año}
            </p>
            <h2 className="text-2xl font-bold">{object.nombre}</h2>
            <p className="mt-3 text-stone-400">{object.descripcion}</p>

            <p className="mt-4 text-sm text-amber-500">
                Contradicciones resueltas: {resolvedCount} de {object.contradicciones.length}
            </p>

            {object.contradicciones.map((c) => {
                const outcome = getOutcome(c, stamps)

                return (
                    outcome && (
                        <motion.aside
                            key={`${c.id}-${outcome}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="my-6 border-l-4 border-amber-500 bg-stone-900 p-4"
                        >
                            <h3 className="text-xs tracking-widest text-amber-500">
                                NOTA DEL ARCHIVISTA
                            </h3>
                            <p className="mt-2 italic">{outcome}</p>
                        </motion.aside>
                    )
                )
            })}

            <Tabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-6 space-y-4"
            >
                {activeTab === "components" && (
                    <InteractiveCapsule components={object.componentes} />
                )}

                {activeTab === "documents" &&
                    object.documentos.map((doc) => (
                        <DocumentCard
                            key={doc.id}
                            doc={doc}
                            stamp={stamps[doc.id]}
                            onStamp={handleStamp}
                            alerts={getAlerts(doc, stamps)}
                        />
                    ))}

                {activeTab === "testimonies" &&
                    object.testimonios.map((t) => (
                        <TestimonyCard key={t.id} testimony={t} />
                    ))}
            </motion.div>
        </section>
    )
}

export default FileDetail