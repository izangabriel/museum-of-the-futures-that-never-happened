import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useStamps } from "../contexts/StampsContext"
import { objetos } from "../data/objetos"
import { countResolved } from "../utils/contradictions"
import { container, item } from "../animation"
import DecryptText from "../components/DecryptText"

const Home = () => {
    const { stamps, resetStamps } = useStamps()

    const total = objetos.reduce((sum, o) => sum + o.contradicciones.length, 0)
    const resolved = objetos.reduce((sum, o) => sum + countResolved(o, stamps), 0)

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="py-12 text-center"
        >
            <motion.p variants={item} className="text-xs tracking-[0.3em] text-amber-500">
                <DecryptText text="ARCHIVO CLASIFICADO · NIVEL 4" />
            </motion.p>
            <motion.h1 variants={item} className="mt-4 text-3xl font-bold">
                <DecryptText text="Museo de los Futuros que Nunca Ocurrieron" />
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-stone-400">
                Estos objetos pertenecen a líneas temporales que jamás llegaron a existir.
                Sus documentos se contradicen entre sí. Tú decides cuáles son auténticos,
                y con eso, qué historia queda en pie.
            </motion.p>

            <motion.div variants={item} className="flex flex-col items-center justify-center">
                <Link
                    to="/archivo"
                    className="mt-8 inline-block border border-amber-500 px-6 py-3 text-amber-500 transition hover:bg-amber-500 hover:text-stone-950"
                >
                    Entrar al archivo
                </Link>

                <button
                    onClick={resetStamps}
                    className="mt-8 inline-block border border-amber-500 px-6 py-3 text-amber-500 transition hover:bg-amber-500 hover:text-stone-950 cursor-pointer"
                >
                    Reiniciar
                </button>
            </motion.div>

            <motion.p variants={item} className="mt-8 text-sm text-stone-500">
                Contradicciones resueltas: {resolved} de {total}
            </motion.p>
        </motion.section>
    )
}

export default Home