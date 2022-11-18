//criar props para propriedades padrões
//sempre que tiver um conjunto de props que vc tem certeza de que não vai ser alterado
//o interessante é colocar fora do componente para evitar recarregar e renderizar
//estas propriedades
import styles from './Footer.module.scss';
import { ReactComponent as MarcaRegistrada } from 'assets/marca-registrada.svg';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa';

const iconeProps = {
    color: 'white',
    size: '20'
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <FaFacebook {...iconeProps} />
                <FaTwitter {...iconeProps}  />
                <FaInstagram {...iconeProps}  />
            </div>
            <span>
                Desenvolvido por Onemt <MarcaRegistrada /> - 2022                 
            </span>

        </footer>

    )
}