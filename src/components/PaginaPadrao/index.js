import Navbar from 'components/Navbar';
import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import logo from '../../assets/logo-rok.png'; 

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header
        titulo='Itens de ROK'
        descricao='Compre e pesquise as melhores skills de ROK'
        imagem={logo}        
        className={styles.header}
      />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}