import { useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Home from "./pages/Home";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Home />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
