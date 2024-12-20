import { WidgetGrid } from "@/app/components";



export default function Mainpage() {
  return (
    <div className=" text-black p-2">
      <h1 className=" mt-2 text-3xl">Dashboard</h1>
      <span className=" text-xl">Informacion General</span>

        <WidgetGrid />

    </div>
  )
}
