import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Packaging from './views/Packaging';
import Drinkware from './views/Drinkware';
import Apparel from './views/Apparel';
import Notebooks from './views/Notebooks';
import Backpacks from './views/Backpacks';
import Cart from './views/cart/Cart';
import Signin from './views/Signin';
import Header from './layout/Header';
import Footer from './layout/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/drinkware" element={<Drinkware />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/backpacks" element={<Backpacks />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
