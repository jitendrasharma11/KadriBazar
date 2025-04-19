import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mainlayout from './common/Mainlayout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Products from './common/pages/Products.jsx'
import Register from './common/pages/Register.jsx'
import Cart from './common/pages/Cart.jsx'
import Home from './common/pages/Home.jsx'
import Login from './common/pages/Login.jsx'
import ProductDetails from './common/pages/ProductDetails.jsx'
import PageNot from './common/pages/PageNot.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path="/product-details/:pid" element={<ProductDetails />} />
          <Route path='*' element={<PageNot/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
