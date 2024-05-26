import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import { useState } from 'react';




function App() {
  const [menu,setMenu] = useState('')
  return (
    <div>

      <BrowserRouter>
     <Navbar/>
     <ul className='small-screen'>
            <li onClick={()=> setMenu('shop')}><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Shop </Link> {menu ==='shop'}</li>
            <li onClick={()=> setMenu('mens')}><Link to='/mens' style={{textDecoration: 'none', color: 'black'}}>  Men</Link>{menu ==='mens'}</li>
            <li onClick={()=> setMenu('womens')}><Link to='/womens' style={{textDecoration: 'none', color: 'black'}}>   Women</Link>{menu ==='womens'}</li>
            <li onClick={()=> setMenu('kids')}> <Link to='/kids' style={{textDecoration: 'none', color: 'black'}}>Kids </Link>{menu ==='kids'}</li>
        </ul>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner}  category='men'  />}/>
        <Route path='/womens' element={<ShopCategory  banner={women_banner}  category='women' />}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner}   category='kid'  />}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
