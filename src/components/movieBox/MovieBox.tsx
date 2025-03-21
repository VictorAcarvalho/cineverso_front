import { Movie } from '../../types/movies.types';
import styles from './MovieBox.module.css'


function MovieBox(props: Movie) {

    return (
        <div className={styles.itemCard} key={props.movieId}>
            <img src={props.picture} alt="imagem do produto" className={styles.itemImage} />
            <p className={styles.itemTitle}>
                {props.title}
            </p>
            <p className={styles.itemDescription} > {props.description}</p>
           
            <p className={styles.itemRating}> &#11088; Pontuação: {props.averageRating}</p>
        </div>
    );

}

export default MovieBox;