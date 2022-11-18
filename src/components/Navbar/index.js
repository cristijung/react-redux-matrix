import styles from './Navbar.module.scss'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri';
import Busca from 'components/Busca';

const iconeProps = {
    color: 'white',
    size: 24
}


export default function Navbar() {
    return(
       <nav className={styles.nav}>
        <span className={styles.logo}>Rise of The Kings</span>      
        <div className={styles.links}>
            <div>
                <a href='/' classname={classNames(styles.link, {
                    [styles.selected]: window.location.pathname === '/'
                })} style={{color:'#fff', fontSize: '24px'}}>
                    Página Inicial
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