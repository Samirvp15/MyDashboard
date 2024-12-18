"use client"
import { useState } from "react"



interface CartCounterProps {
    value?: number
}


export function CartCounter({value = 0}: CartCounterProps) {

    const [count, setCount] = useState(value)
    return (
        <>
            <span className=" text-9xl">{count}</span>

            <div className=" flex">
                <button
                    onClick={() => setCount(count - 1)}
                    className=" mx-5 w-16 justify-center  flex items-center p-2 rounded bg-gray-500 text-white">
                    -1
                </button>
                <button
                    onClick={() => setCount(count + 1)}
                    className=" mx-5 w-16 justify-center flex items-center p-2 rounded bg-gray-500 text-white">
                    +1
                </button>
            </div>
        </>
    )
}

