import { Suspense, lazy } from "react";
import { Route, Routes} from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import Navigation from "./components/navigation/Navigation";
const HomePage = lazy(()=> import( "./pages/homePage/HomePage"))
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/movieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/movieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/movieReviews/MovieReviews"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));


const App = () => {
    return (
        <div>
            <header>
                
                <Navigation />
                <Toaster toastOptions={{
                className: '',
                error:{style: {
        
        border: '1px solid black',
        fontWeight: '500',
        fontSize: '20px',
        padding: '20px',
        color: 'black',
        background: 'light grey'},
                },
  }}/>
            </header>
    <section>
            
             <Suspense fallback={<div>Loading page...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />}/>
                    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                            <Route path="cast" element={<MovieCast />} />
                            <Route path="reviews" element={<MovieReviews />}/>
                        </Route> 
               <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    </Suspense>
            </section>
        </div>
    )
    
};
export default App;
