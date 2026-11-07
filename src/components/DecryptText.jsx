import { useState, useEffect } from "react"

const CHARS = "█▓▒░<>/\\|[]{}#@$%&*+=?0123456789"

const DecryptText = ({ text, speed = 30 }) => {
    const [display, setDisplay] = useState(() => text.replace(/\S/g, "░"))

    useEffect(() => {
        let frame = 0

        const interval = setInterval(() => {
            const revealed = Math.floor(frame / 2)

            const result = text
                .split("")
                .map((char, i) => {
                    if (char === " ") return " "
                    if (i < revealed) return char
                    return CHARS[Math.floor(Math.random() * CHARS.length)]
                })
                .join("")

            setDisplay(result)
            frame++

            if (revealed >= text.length) clearInterval(interval)
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    return (
        <span aria-label={text}>
            <span aria-hidden="true">{display}</span>
        </span>
    )
}

export default DecryptText