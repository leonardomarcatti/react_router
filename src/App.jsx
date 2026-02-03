import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Error from './pages/Error'

const routes = createBrowserRouter([
   {path: '/', index: true, element: <Home />, errorElement: <Error />},
   {path: '/products', element: <Products />},
])

const App = () => {
  return <RouterProvider router={routes}/>
}

export default App
