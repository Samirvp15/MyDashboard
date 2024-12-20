"use client"

import { SimpleWidget } from "@/app/components";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";




export function WidgetGrid() {

    const isCart = useAppSelector(state => state.counter.count)


    return (
        <div className=" flex flex-wrap p-2">
            <SimpleWidget 
                title={isCart.toString()}
                subtitle="Productos Agregados"
                label="Contador"
                icon={ <IoCartOutline size={70} className=" text-blue-600" /> }
            />

        </div>
    )
}
