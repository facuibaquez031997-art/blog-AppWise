import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <form className="flex flex-col justify-center items-center w-screen h-100 gap-3" action="">
        <h1 className="text-center text-black font-bold ">Iniciar sesión</h1>
        <input className="bg-amber-50 text-gray-500 py-1 px-1.5 rounded-xl" type="text" placeholder="Correo electrónico" required />
        <input className="bg-amber-50 text-gray-500 py-1 px-1.5 rounded-xl" type="password" placeholder="Contraseña" required />
        <button className="bg-blue-800 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 shadow-md font-bold cursor-pointer">Entrar</button>
        <div className="flex justify-between items-center gap-1">
            <p className="text-gray-500">¿No tienes cuenta?</p>
            <Link className="text-blue-700 cursor-pointer" to="">Registrate</Link>
        </div>     
    </form>
    </div>
    )
}

export default Login
        
