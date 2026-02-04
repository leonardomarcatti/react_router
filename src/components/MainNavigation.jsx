import styles from './mainnavigation.module.css'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
   return <header className={styles.header}>
      <nav>
         <ul className={styles.list}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
         </ul>
      </nav>
   </header>
}

export default MainNavigation