import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { objetos } from "../data/objetos"
import { useStamps } from "../contexts/StampsContext"
import { countResolved } from "../utils/contradictions"
import { container, item } from "../animation"
import WorldMap from "../components/WorldMap"

const Files = () => {
    const { stamps } = useStamps()

    return (
        <section>
            <h1 className="mb-6 text-xl font-bold tracking-widest text-amber-500">
                EXPEDIENTES
            </h1>

            <div className="mb-8">
                <WorldMap />
            </div>

            <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-4"
            >
                {objetos.map((objeto) => (
                    <motion.li key={objeto.id} variants={item}>
                        <Link
                            to={`/archivo/${objeto.id}`}
                            className="block border border-stone-700 p-4 transition hover:border-amber-500 hover:bg-stone-900"
                        >
                            <p className="text-xs text-stone-400">
                                {objeto.lineaTemporal} · {objeto.año}
                                {objeto.region ? ` · ${objeto.region}` : ""}
                            </p>
                            <h3 className="text-lg font-bold">{objeto.nombre}</h3>
                            <p className="mt-2 text-sm text-stone-400">
                                Contradicciones resueltas: {countResolved(objeto, stamps)} de {objeto.contradicciones.length}
                            </p>
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}

export default Files