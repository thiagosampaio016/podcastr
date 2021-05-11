import styles from './styles.module.scss';

export function Player() {
    return (
       <div className={styles.playerContainer}>
           <header> 
               <img src="playing.svg" alt="Tocando Agora" />
               <strong>Tocando agora</strong>
           </header>
           <div className={styles.emptyPlayer}>
               <strong>Selecione um podcast para ouvir</strong>
           </div>
           <footer>
        <div className={style.progress}>
            <span>00:00</span>
            <div className={styles.emptySlider}/>
            <span>00:00</span>
             </div>
             <div className={styles.btn}>
            <button type="button"> 
            <img src="/sufler.svg" alt="Embaralhar">
            </button>
            <button type="button"> 
            <img src="/sufler.svg" alt="Embaralhar">
            </button>

             </div>
           </footer>
       </div>

    );
}