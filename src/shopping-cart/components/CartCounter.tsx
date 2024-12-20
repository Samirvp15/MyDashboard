"use client"
import { useAppDispatch, useAppSelector } from "@/store"
import { addOne, substractOne } from "@/store/counter/counterSlice"




interface CartCounterProps {
    value?: number
}


export function CartCounter({ value = 0 }: CartCounterProps) {

    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    return (
        <>
            <span className=" text-9xl">{count}</span>

            <div className=" flex">
                <button
                    onClick={() => dispatch(addOne())}
                    className=" mx-5 w-16 justify-center  flex items-center p-2 rounded bg-gray-500 text-white">
                    -1
                </button>
                <button
                    onClick={() => dispatch(substractOne())}
                    className=" mx-5 w-16 justify-center flex items-center p-2 rounded bg-gray-500 text-white">
                    +1
                </button>
            </div>
        </>
    )
}

