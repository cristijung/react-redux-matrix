import styles from './Busca.module.scss';

//só a estilização --> o controle será feito com o Redux depois
export default function Busca() {
    return (
        <div className={styles.busca}>
            <input 
            className={styles.input} 
            placeholder='O que você procura?'
            />   
        </div>
    )
}