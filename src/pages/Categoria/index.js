import styles from './Categoria.module.scss';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



export default function Categoria() {
    return (
        <>
            <Header 
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header}
            />
        </>
    )
}