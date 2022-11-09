"use client"

import { useState } from "react"

const words =["hello", "good", "fruits", "fish", "birth", "cats", "dog", "video"]

export default function WordGenerator() { 
    const [word, setWord] = useState("Nothing yet : (");
    
    const generate = () => {
        const randomWord = words[Math.floor(Math.random() * words.length)]
        setWord(randomWord)
    }
    return (
    <div>
        <button onClick={generate}>
            Generate words
        </button>
        <div>Generated: {word}</div>
    </div>
    )
}