import { Link } from "react-router-dom";
import { mockPosts } from "../data/mockData";
import RenderPostList from "../components/RenderPostList";

const Home = () => {
  const post = mockPosts[0];
  return (
    
    <div>
      <header className="m-4 px-4 md:px-8 lg:px-32 2xl:px-64">
        <div className="flex justify-start items-center gap-2">
        <Link>Inicio .</Link>
        <p className="text-blue-600">Blogs y Articulos</p>
        </div>

        <div>
          <div className="flex justify-between items-center gap-5 py-2.5">
            <h1 className="font-extrabold text-3xl sm:text-2xl">Tu fuente de conocimiento sobre desarrollo web y tecnología.</h1>
           <button className="relative w-50 h-50 sm:h-40 sm:w-40 rounded-full flex items-center justify-center cursor-pointer">
            {/* Texto circular */}
            <svg viewBox="0 0 200 200" className="absolute w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100
                    m -90, 0
                    a 90,90 0 1,1 180,0
                    a 90,90 0 1,1 -180,0"
                />
              </defs>
              <text fill="black" fontSize="20" fontWeight="bold">
                <textPath href="#circlePath" startOffset="10%">
                  Escribe tu historia.
                </textPath>
              </text>
            </svg>

            {/* Contenido central */}
            <span className="text-lg font-bold rounded-full">↗️</span>

            <svg viewBox="0 0 200 200" className="absolute w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100
                    m -90, 0
                    a 90,90 0 1,1 190,0
                    a 90,90 0 1,1 -190,0"
                />
              </defs>
            <text fill="black" fontSize="20" fontWeight="bold">
                <textPath href="#circlePath" startOffset="60%">
                  Comparte tu idea.
                </textPath>
              </text>
             </svg> 
            </button>

  


          </div>
          
          <p className="py-3">Articulos, tutoriales y guías escritos por desarrolladores para desarrolladores</p>
        </div>

        <nav className="bg-amber-50 flex gap-2 overflow-x-auto overflow-y-auto px-2 py-2 rounded-2xl">
          <Link to="/post/category/Diseño Web" className="hover:bg-blue-500 text-black font-bold rounded-2xl px-1.5 py-1 cursor-pointer">Diseño Web</Link>
          <Link to="/post/category/Desarrollo" className="hover:bg-blue-500 text-black font-bold rounded-2xl px-1.5 py-1 cursor-pointer">Desarrollo</Link>
          <Link to="/post/category/Bases de Datos" className="hover:bg-blue-500 text-black font-bold rounded-2xl px-1.5 py-1 cursor-pointer">Bases de Datos</Link>
          <Link to="/post/category/Motores de Búsqueda" className="hover:bg-blue-500 text-black font-bold rounded-2xl px-1.5 py-1 cursor-pointer">Motores de Búsqueda</Link>
          <Link to="/post/category/Marketing" className="hover:bg-blue-500 text-black font-bold rounded-2xl px-1.5 py-1 cursor-pointer">Marketing</Link>
          <input className="bg-gray-200 rounded-2xl py-1 px-2" 
          type="text" placeholder="🔍 search a post..." />
        </nav>
      </header>

      <div className="m-7 md:m-12 lg:m-36">
        <RenderPostList post={post}/>
      </div>
    </div>
  )
}

export default Home;
