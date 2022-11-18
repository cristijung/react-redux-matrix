import styles from './Home.module.scss';
import logo from '../../assets/logo-rok.png';
import Header from 'components/Header';

export default function Home() {
    <>
        <Header
            titulo='Itens de ROK'
            descricao='Compre e pesquise as melhores skills de ROK'
            imagem={logo}
            className={styles.header}
        />
        
    </>
}