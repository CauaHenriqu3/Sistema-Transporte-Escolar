import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/Pages/HomePage";
import Login from "./components/Pages/Login";

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  products={products}
                />
              }
            />
            <Route
              path="/Login"
              element={
                <Login />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
