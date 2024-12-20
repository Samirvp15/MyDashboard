"use client"
import { useAppDispatch, useAppSelector } from "@/store"
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice"
import { useEffect } from "react";





interface CartCounterProps {
    value?: number
}

export interface CounterResponse {
    count: number;
    method: string;
}



const getApiCounter = async (): Promise<CounterResponse> => {
    const response = await fetch("/api/counter")
    const data = await response.json()
    return data
}


export function CartCounter({ value = 0 }: CartCounterProps) {

    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    /*useEffect(() => {
        dispatch(initCounterState(value))
    }, [dispatch, value])*/

    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispatch(initCounterState(count)))
    }, [dispatch])

    return (
        <>
            <span className=" text-9xl">{count}</span>

            <div className=" flex">
                <button
                    onClick={() => dispatch(substractOne())}
                    className=" mx-5 w-16 justify-center  flex items-center p-2 rounded bg-gray-500 text-white">
                    -1
                </button>
                <button
                    onClick={() => dispatch(addOne())}
                    className=" mx-5 w-16 justify-center flex items-center p-2 rounded bg-gray-500 text-white">
                    +1
                </button>
            </div>
        </>
    )
}

