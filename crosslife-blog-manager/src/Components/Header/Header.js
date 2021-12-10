import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Hooks/useAuth';
import Logo from '../Logo/Logo';
import ListOptions from '../ListOptions/ListOptions';
import {ReactComponent as Sun} from '../../Assets/sun.svg';
import {ReactComponent as Moon} from '../../Assets/moon.svg';
import {ReactComponent as User} from '../../Assets/user.svg';
import {ReactComponent as UserBlack} from '../../Assets/userBlack.svg';

const Header = () => {
  const {signOut} = React.useContext(AuthContext);
  const [dark, setDark] = React.useState(true);
  const [active, setActive] = React.useState(false);
  const buttonVisibilityControlRef = React.useRef(null); 

  const handleThema = () => {
    document.querySelector('html').classList.toggle("claro")
    setDark(!dark)
  }

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.wrapper}`}>
        <Link to="/noticias"> <Logo /> </Link>

        <Link to="pesquisa" className={styles.itemHeader}></Link>
        <div className={styles.itemHeader} onClick={handleThema}> {dark ?  <Sun/> : <Moon/>}</div>
        <div className={styles.itemHeader} onClick={() => {setActive(!active)}} aria-controls="listOptionsUser" ref={buttonVisibilityControlRef}>
          {dark ?  <User/> : <UserBlack/>}
          
        </div>
        
        {
          active && 
          <ListOptions id="listOptionsUser" setActive={setActive} classOptions="listOptionsUser" buttonVisibilityControlRef={buttonVisibilityControlRef}>
            <li><Link to=''>Minhas noticias</Link></li>
            <li><button onClick={handleThema}>Tema: {dark ?  'escuro' : 'branco'}</button></li>
            <li><button onClick={signOut}>Sair</button></li>
          </ListOptions>
        }
        
      </nav>
    </header>
  )
}

export default Header
