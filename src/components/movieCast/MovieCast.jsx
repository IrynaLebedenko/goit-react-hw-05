import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/Api";
import MovieCastItem from "../movieCastItem/MovieCastItem";
import css from './MovieCast.module.css'
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

const MovieCast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { movieId } = useParams();  

    useEffect(() => {
        const loadMovieById = async () => {
            try {
            setLoading(true);
            const movies = await fetchMovieCast(movieId);
            const cast = movies.data.cast;
            setMovieCast(cast);
        } catch(error) {
            setIsError(true);
            }
            finally {
            setLoading(false);
        }
    };
loadMovieById()
    }, [movieId]);

   
    return (
        <>
        <ul className={css.castList}>
            {movieCast.map((cast) => {
                return (
                    <li key={cast.id}>
                        <MovieCastItem {...cast} key={cast.id} /> 
                    </li>
                ) 
            })}
        </ul>
        {loading && <Loader />}
            {isError && <ErrorMessage />}
            </>
    )
}
export default MovieCast;