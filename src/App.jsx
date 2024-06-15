// import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NavHeader from "./Navigation/NavHeader";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App = () => {
  return (
    <div>
      <NavHeader/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/movies/:movieId" element={<MovieDetailsPage/>}/>
      </Routes>
    </div>
  
  )
}
export default App;

// // ключ api
// cefaa401c280a583e1f3164fc1eda859

// // токен доступу
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhYTQwMWMyODBhNTgzZTFmMzE2NGZjMWVkYTg1OSIsInN1YiI6IjY2NmEwMGNlZjM3ZDA2OTRiMmVhMTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVLPpxQfRI2FZQnZBlywo3QUFxCzxHSlUCtx9DFQ-8A
