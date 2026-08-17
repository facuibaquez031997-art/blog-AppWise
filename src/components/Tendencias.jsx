import { Link } from "react-router-dom"
import RenderPostList from "./RenderPostList"

const Tendencias = () => {
  return (
    <div>
        <div className="flex flex-col items-start gap-3 m-10">
          <p className="font-medium">Blog de Desarrollo</p>
          <Link to="/">
          <button className="bg-blue-800 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 shadow-md font-bold cursor-pointer">Regresar</button>
          </Link>
        </div>
        <RenderPostList className="flex flex-col items-center gap-6 "/>
        <footer className="font-extrabold">Todos los post cargados!</footer>
    </div>
  )
}

export default Tendencias
