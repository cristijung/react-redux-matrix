import styles from './Navbar.module.scss'
import Logo from '../../assets/logo.png'
import classNames from 'classnames'


export default function Navbar() {
    return(
       <nav className={styles.nav}>
        <img src={Logo} className={styles.logo}/>
        <div className={styles.links}>
            <div>
                <a href='/' classname={classNames(styles.link, {
                    [styles.selected]: window.location.pathname === '/'
                })}>
                    Home
                </a>
            </div>

        </div>
        
            
       </nav>
    )
}