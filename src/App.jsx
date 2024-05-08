import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen/homeScreen";
import { Categories } from "./Components/Categories/categories";
import { Search } from "./Components/Search/search";
import { Login } from "./Components/Profile/login/login";
import { Reg } from "./Components/Profile/reg/reg";
import { CategoriesPage } from "./Components/CategoriesPage/categoriesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categoriesPage/:id" element={<CategoriesPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
