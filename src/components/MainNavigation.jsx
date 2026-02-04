import styles from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
   return <header className={styles.header}>
      <nav>
         <ul className={styles.list}>
            <li><NavLink to='/' end className={({isActive}) => isActive? styles.active : ''}>Home</NavLink></li>
            <li><NavLink to='/products' end className={({ isActive }) => isActive ? styles.active : ''}>Products</NavLink></li>
         </ul>
      </nav>
   </header>
}

export default MainNavigation