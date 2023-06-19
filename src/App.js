import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeContainer from "./page/home";
import { FoodContextProvider } from "./context";
import Category from "./page/categories";
import Search from "./page/search-food";

function App() {
  return (
    <div className="App">
      <FoodContextProvider>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/:id" element={<Category />} />
          <Route path="/search/:id" element={<Search />} />
        </Routes>
      </FoodContextProvider>
    </div>
  );
}

export default App;
