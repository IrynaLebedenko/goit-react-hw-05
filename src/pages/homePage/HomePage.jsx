import MovieList from "../../components/movieList/MovieList";
import { fetchTrendingMovies } from '../../api/Api'
import { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const HomePage = () => {
    const [trendMovies, setTrendMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
   
    useEffect(() => { const loadTrendMovies = async () => {
        try {
            setLoading(true);
            const movies = await fetchTrendingMovies();
            const trendList = movies.data.results;
            setTrendMovies(trendList);
        } catch {
            setIsError(true);
        }
        finally {
            setLoading(false);
        }
    }
loadTrendMovies()
}, []);
    return (
        <>
        <MovieList trendList={trendMovies} />
            {loading && <Loader />}
            {isError && <ErrorMessage/>}
        </>
        
    )

}
export default HomePage;