import { useEffect, useRef, useState } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from '../../api/Api';
import css from './MovieDetailsPage.module.css';
import  Loader  from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";


const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = useRef(location.state ?? "/");
    

    useEffect(() => {
        const loadMovieById = async () => {
        try {
            setLoading(true);
            const movies = await fetchMovieDetails(movieId);
            const details = movies.data;
            setMovieDetails(details);
        } catch(error) {
            setIsError(true);
        }
        finally {
            setLoading(false);
        }
        };
        loadMovieById()
    }, [movieId]);
    
    const url = `https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`;
    
    return (
        <div className={css.detailsContainer}>
            <Link to={backLinkHref.current}>Go back</Link>
            <div className={css.imgContainer}><img src={url} alt="photo" /></div>
            <div className={css.sideContainer}>
                <h1 className={css.title}>{movieDetails.title}</h1>
                <p className={css.movieDetails}>genres: {movieDetails.genres && movieDetails.genres.map((genre) => { return genre.name   })}</p>
                <p className={css.movieDetails}>overview:</p>
                
                <p className={css.movieDetailsSmall}>{movieDetails.overview}</p>
                <p className={css.movieDetails}>user score: { movieDetails.vote_average}</p>
                <div className={css.castContainer}>
                <p className={css.movieDetails}>Additional information</p>

                    <p><Link to='cast'>Cast</Link></p>
                <p><Link to='reviews'>Reviews</Link></p>
                    {loading && <Loader />}
            {isError && <ErrorMessage/>}
                </div>
                
                <Outlet />
            </div>
        </div>
    );
};

export default MovieDetailsPage;