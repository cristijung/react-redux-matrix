import styles from './Footer.module.scss';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa';
//criar props para propriedades padrões
//sempre que tiver um conjunto de props que vc tem certeza de que não vai ser alterado
//o interessante é colocar fora do componente para evitar recarregar e renderizar
//estas propriedades
const iconeProps = {
    color: 'white',
    size: '24,'
}

export default function Footer() {
    return (
        <footer>
            <div>
                <FaFacebook {...iconeProps} />
                <FaTwitter {...iconeProps}  />
                <FaInstagram {...iconeProps}  />
            </div>
            <span>
                Desenvolvido por Onment - 2022
            </span>

        </footer>

    )
}