import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen/homeScreen";
import { Categories } from "./Components/Categories/categories";
import { Search } from "./Components/Search/search";
import { Login } from "./Components/Profile/login/login";
import { Reg } from "./Components/Profile/reg/reg";
import { MoviePage } from "./Components/MoviePage/moviePage";
import { MoreInformation } from "./Components/MoreInformation/moreInformation";
import { Comment } from "./Components/Comments/comment";
import { MovieType } from "./Components/MovieType/movieType";
import { MoreMovie } from "./Components/MoreMovie/moreMovie";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/moviePage/:id" element={<MoviePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/moviePage/:id/comment" element={<Comment />} />
        <Route path="/movieType/:genre" element={<MovieType />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/moreMovie/:sectionTitle" element={<MoreMovie />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <MoreInformation />
    </div>
  );
}

export default App;
