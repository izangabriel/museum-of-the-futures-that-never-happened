import { objetos } from "../data/objetos"

export const isResolved = (contradiction, stamps) => {
    const [idA, idB] = contradiction.documentos
    const stampA = stamps[idA]
    const stampB = stamps[idB]

    return (
        (stampA === "authentic" && stampB === "fake") ||
        (stampA === "fake" && stampB === "authentic")
    )
}

export const getOutcome = (contradiction, stamps) => {
    if (!isResolved(contradiction, stamps)) return null

    const [idA, idB] = contradiction.documentos
    const authenticId = stamps[idA] === "authentic" ? idA : idB

    return contradiction.resultados[authenticId]
}

export const countResolved = (object, stamps) => {
    return object.contradicciones.filter((c) => isResolved(c, stamps)).length
}

export const getAuthenticId = (contradictionId, stamps) => {
    const all = objetos.flatMap((o) => o.contradicciones)
    const contradiction = all.find((c) => c.id === contradictionId)

    if (!contradiction || !isResolved(contradiction, stamps)) return null

    const [idA, idB] = contradiction.documentos
    return stamps[idA] === "authentic" ? idA : idB
}

export const getAlerts = (doc, stamps) => {
    return (doc.alertas ?? [])
        .filter((a) => getAuthenticId(a.contradiccion, stamps) === a.cuando)
        .map((a) => a.texto)
}