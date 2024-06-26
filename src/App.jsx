import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));

const App = () => {
  return (
    <div>
        <Suspense fallback={<div>Loading</div>}>
        <Navigation/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="Cast" element={<MovieCast />} />
          <Route path="Reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>        
      </Suspense>

    </div>
  );
};
export default App;

// // ключ api
// cefaa401c280a583e1f3164fc1eda859

// // токен доступу
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhYTQwMWMyODBhNTgzZTFmMzE2NGZjMWVkYTg1OSIsInN1YiI6IjY2NmEwMGNlZjM3ZDA2OTRiMmVhMTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVLPpxQfRI2FZQnZBlywo3QUFxCzxHSlUCtx9DFQ-8A
