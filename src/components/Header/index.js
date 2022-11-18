import styles from './Header.module.scss';

//o h1 recebe o título por meio de props do header
//no header vamos colocar titulo, descricao e um className genérico
//className como '' para o caso dele não ter nada e não
//retornar undefined
export default function Header({ titulo, descricao, className = '', imagem}) {
    return (
      <header className={`${styles.header} ${className}`}>
        <div className={styles['header-texto']}>
          <h1>{titulo}</h1>
          <h2>{descricao}</h2>
        </div>
        <div className={styles['header-imagem']}>
          <img
            alt={titulo}
            src={imagem}
          />
        </div>
      </header>
    )
  }