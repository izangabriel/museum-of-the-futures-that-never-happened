import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import DecryptText from "../components/DecryptText"
import { container, item } from "../animation"

const Page404 = () => {
    const { pathname } = useLocation()

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="py-12 text-center"
        >
            <motion.p variants={item} className="text-xs tracking-[0.3em] text-red-500">
                <DecryptText text="ERROR 404 · LÍNEA TEMPORAL INEXISTENTE" />
            </motion.p>

            <motion.h1 variants={item} className="mt-4 text-6xl font-bold text-amber-500">
                404
            </motion.h1>

            <motion.h2 variants={item} className="mt-4 text-2xl font-bold">
                Expediente no encontrado
            </motion.h2>

            <motion.p variants={item} className="mt-6 text-stone-400">
                Este expediente no existe en ninguna línea temporal. Quizás alguien lo
                borró del archivo, o nunca llegó a ocurrir.
            </motion.p>

            <motion.p
                variants={item}
                className="mt-6 break-all border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-stone-500"
            >
                Referencia solicitada: <span className="text-stone-300">{pathname}</span>
            </motion.p>

            <motion.p variants={item} className="mt-4 text-sm text-stone-500">
                Motivo de la desaparición:{" "}
                <span
                    tabIndex={0}
                    className="cursor-help bg-stone-300 px-1 text-stone-300 transition hover:bg-transparent hover:text-amber-500 focus:bg-transparent focus:text-amber-500 focus:outline-none"
                >
                    la dirección está mal escrita
                </span>
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                    to="/"
                    className="border border-amber-500 px-6 py-3 text-amber-500 transition hover:bg-amber-500 hover:text-stone-950"
                >
                    Volver al inicio
                </Link>
                <Link
                    to="/archivo"
                    className="border border-stone-600 px-6 py-3 transition hover:border-amber-500 hover:text-amber-400"
                >
                    Ir al archivo
                </Link>
            </motion.div>
        </motion.section>
    )
}

export default Page404