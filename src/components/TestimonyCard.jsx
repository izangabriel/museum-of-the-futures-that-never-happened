const TestimonyCard = ({ testimony }) => {
    return (
        <article className="border-l-2 border-stone-600 pl-4">
            <h3 className="text-sm text-stone-400">{testimony.autor}</h3>
            <p className="mt-1 italic">“{testimony.texto}”</p>
        </article>
    )
}

export default TestimonyCard