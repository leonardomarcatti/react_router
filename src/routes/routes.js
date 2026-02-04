import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Error from '../pages/Error'

const routes = createBrowserRouter([
   { path: '/', index: true, element: <Home />, errorElement: <Error /> },
   { path: '/products', element: <Products /> },
])


export default routes
