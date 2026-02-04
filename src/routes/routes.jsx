import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Error from '../pages/Error'
import Layout from '../layout/Layout'

const routes = createBrowserRouter([
   {path: '/', element: <Layout/>, children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
   ], errorElement: <Error />
}
])


export default routes
