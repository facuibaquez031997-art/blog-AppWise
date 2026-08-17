import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Tendencias from './components/Tendencias';
import Render from './components/Render';
import RenderNav from './components/RenderNav';


const router = createBrowserRouter (
  [
    {
      element: <App/>,
      children: [
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/tendencias',
          element: <Tendencias/>,
        },
        {
          path:'/login',
        element:<Login/>,
        },
        {
          path:'/post/:id',
          element:<Render/>,
        },
        {
          path:'/post/category/:category',
          element:<RenderNav/>
        },
      ],
    },
    ],
  )

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
