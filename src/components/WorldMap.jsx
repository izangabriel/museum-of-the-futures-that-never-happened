import { Link } from "react-router-dom"
import { geoNaturalEarth1, geoPath, geoGraticule10 } from "d3-geo"
import { feature } from "topojson-client"
import land from "world-atlas/land-110m.json"
import { objetos } from "../data/objetos"
import { useStamps } from "../contexts/StampsContext"
import { countResolved } from "../utils/contradictions"

const WIDTH = 960
const HEIGHT = 500

const sphere = { type: "Sphere" }
const projection = geoNaturalEarth1().fitSize([WIDTH, HEIGHT], sphere)
const path = geoPath(projection)
const landShape = feature(land, land.objects.land)
const grid = geoGraticule10()

const WorldMap = () => {
    const { stamps } = useStamps()

    return (
        <div>
            <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                className="w-full"
                role="img"
                aria-label="Mapa del mundo con la ubicación de cada objeto del museo"
            >
                <path d={path(sphere)} className="fill-stone-900 stroke-stone-700" />
                <path d={path(grid)} className="fill-none stroke-stone-800" strokeWidth={0.5} />
                <path d={path(landShape)} className="fill-stone-800 stroke-stone-600" strokeWidth={0.5} />

                {objetos.map((o) => {
                    if (!o.coordenadas) return null

                    const [x, y] = projection(o.coordenadas)
                    const resolved = countResolved(o, stamps) === o.contradicciones.length

                    return (
                        <Link key={o.id} to={`/archivo/${o.id}`}>
                            <g className="cursor-pointer">
                                <title>{o.nombre}</title>
                                <circle cx={x} cy={y} r={20} fill="transparent" />
                                {!resolved && (
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r={5}
                                        className="animate-ping fill-none stroke-amber-500"
                                        style={{ transformBox: "fill-box", transformOrigin: "center" }}
                                    />
                                )}
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={5}
                                    className={resolved ? "fill-green-500" : "fill-amber-500"}
                                />
                            </g>
                        </Link>
                    )
                })}
            </svg>

            <p className="mt-2 flex justify-center gap-6 text-xs text-stone-500">
                <span>
                    <span className="text-amber-500">●</span> contradicción abierta
                </span>
                <span>
                    <span className="text-green-500">●</span> resuelta
                </span>
            </p>
        </div>
    )
}

export default WorldMap