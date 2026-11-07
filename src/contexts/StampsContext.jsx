import { createContext, useContext, useState, useEffect } from "react"

const StampsContext = createContext()

export const StampsProvider = ({ children }) => {
    const [stamps, setStamps] = useState(() => {
        const saved = localStorage.getItem("museo-stamps")
        return saved ? JSON.parse(saved) : {}
    });

    useEffect(() => {
        localStorage.setItem("museo-stamps", JSON.stringify(stamps))
    }, [stamps]);

    const handleStamp = (docId, value) => {
        setStamps((prev) => ({
            ...prev,
            [docId]: prev[docId] === value ? null : value,
        }));
    };

    const resetStamps = () => {
        setStamps({});
    };

    return (
        <StampsContext.Provider value={{ stamps, handleStamp, resetStamps }}>
            {children}
        </StampsContext.Provider>
    )
}

export const useStamps = () => useContext(StampsContext)