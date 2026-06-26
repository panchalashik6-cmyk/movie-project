import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Comp/Navbar";
import MovieList from "./Comp/MovieList";
import MovieSearch from "./Comp/MovieSearch";
import Login from "./Comp/Login";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<MovieList />} />

        <Route path="/search" element={<MovieSearch/>} />

        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;