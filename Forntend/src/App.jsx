
import './App.css'
// import Header from './components/header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/login'
import Signup from './components/pages/Signup'
import Cart from './components/pages/Cart'
// import CartItem from './components/cartItem'
import ProductTypes from "./components/ProductTypes"
import ProductsList from "./components/ProductsList"
import Product from './components/product'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="category/:sub_category" element={<ProductsList/>}/>
        <Route path="category/:sub_category/:product_type" element={<ProductTypes/>}/>
        {/* <Route path="category/:title/:childtitle/:name" element={<ProductsList/>}/> */}
        <Route path='category/:sub_category/:product_type/:title' element={<Product />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
