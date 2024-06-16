import { Route, Routes } from "react-router-dom";
import NavHeader from "./components/Navigation/NavHeader";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieCast from "./components/MovieCast/MovieCast";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div>
      <NavHeader/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
          <Route path="Cast" element={<MovieCast/>}/>
          <Route path="Reviews" element={<MovieReviews/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  
  )
}
export default App;

// // ключ api
// cefaa401c280a583e1f3164fc1eda859

// // токен доступу
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhYTQwMWMyODBhNTgzZTFmMzE2NGZjMWVkYTg1OSIsInN1YiI6IjY2NmEwMGNlZjM3ZDA2OTRiMmVhMTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVLPpxQfRI2FZQnZBlywo3QUFxCzxHSlUCtx9DFQ-8A
