import { Outlet } from "react-router-dom"
import styles from './Layout.module.css'
import MainNavigation from "../components/MainNavigation"

const Layout = () => {
   return <div className={styles.content}>
      <MainNavigation />
      <Outlet />
   </div>
}

export default Layout