import styles from './Navbar.module.scss'
import Logo from '../../assets/logo.png'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri';
import Busca from 'comonents/Busca';

const iconeProps = {
    color: 'white',
    size: 24
}


export default function Navbar() {
    return(
       <nav className={styles.nav}>
        <img src={Logo} className={styles.logo} alt='ROK'/>       
        <div className={styles.links}>
            <div>
                <a href='/' classname={classNames(styles.link, {
                    [styles.selected]: window.location.pathname === '/'
                })} style={{color:'#fff', fontSize: '22px'}}>
                    Home
                </a>
            </div>
        </div>
        <div className={styles.busca}>
            <Busca />
        </div>
        <div className={styles.icones}>
            <a href='/carrinho'>
                {/**condicional para os ícones importadors */}
                {window.location.pathname === '/carrinho'
                    ? <RiShoppingCartFill {...iconeProps} />
                    : <RiShoppingCart2Line {...iconeProps} />
                }
            </a>
        </div>

        
            
       </nav>
    )
}