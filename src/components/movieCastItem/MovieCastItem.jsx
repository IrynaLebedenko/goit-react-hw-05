import css from './MovieCastItem.module.css'
const MovieCastItem = ({ name, character, profile_path }) => {
    const url = `https://image.tmdb.org/t/p/w200/${profile_path}`
    return(<div className={css.castItemContainer}>
                        <img src={url} alt="photo" />
                    <p>Name: {name}</p>
                    <p>Character: {character}</p>
                </div>)
    
}

export default MovieCastItem;
