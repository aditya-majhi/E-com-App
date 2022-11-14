import Home from "./components/Home";
import Navbar from "./components/navbar";
import { Routes, Route } from 'react-router-dom';
import ProductPage from "./components/productPage";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import Login from "./components/Login";

function App() {

  return (
    <>
      <div className="bg-sky-100 h-screen">
        <Navbar />
        <Routes>
          <Route path="/E-com-app" element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/products" element={<Products />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
