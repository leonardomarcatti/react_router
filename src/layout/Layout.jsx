import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const Layout = () => {
   return <main>
      <MainNavigation />
      <Outlet />
   </main>
}

export default Layout