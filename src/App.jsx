import { PhotosProvider } from "./context/PhotosContext";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <PhotosProvider>
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </div>
    </PhotosProvider>
  );
};
export default App;
