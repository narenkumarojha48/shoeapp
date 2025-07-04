import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
const NavBar = () => {
  return (
    <nav className={styles.navlink}>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
    </nav>
  )
}

export default NavBar;