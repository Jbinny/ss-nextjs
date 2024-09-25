import styles from './Navigation.module.scss'
import { MdMenu } from "react-icons/md"

export default function Navigation() {
  return(
    <nav className={styles['nav']}>
      <div className='menu-icon'><MdMenu size={30} color='white'/></div>
      <ul>
        
      </ul>

    </nav>
  )
}