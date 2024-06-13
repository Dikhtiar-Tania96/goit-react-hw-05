import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
      </Routes>
    </div>
  )
}
export default App;

// // ключ api
// cefaa401c280a583e1f3164fc1eda859

// // токен доступу
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhYTQwMWMyODBhNTgzZTFmMzE2NGZjMWVkYTg1OSIsInN1YiI6IjY2NmEwMGNlZjM3ZDA2OTRiMmVhMTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVLPpxQfRI2FZQnZBlywo3QUFxCzxHSlUCtx9DFQ-8A
