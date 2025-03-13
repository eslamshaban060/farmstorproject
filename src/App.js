// !!!!!!!!!!!!!!!!!!!!!! MAIN APP FILLE OF MY PROJECT !!!!!!!!!!!!!!!!!!!!!

/*
   IN THIS FILLE I WILL MAKE ALL ROUTER OF MY POROJECT 

*/

// ==================== importing elements =======================

// --------------- to use react -------------------------
import {React} from 'react';

// -------------------- to use router -------------------
import { Route,Routes , BrowserRouter as Rrouter } from 'react-router-dom';

// ----------------- to use css fille -----------------
import './App.css';
// ----------------- Home Page -----------------
import HomePage from './pages/HomePage';
// ----------------- Error404 Page -----------------
import Error404 from './pages/error404';
// -----------------  Register Page -----------------
import Register from './pages/Register';
// -----------------  Favourat Page -----------------
import Favourat from './pages/Favourat';
// -----------------  Shop Page -----------------
import Shop from './pages/Shop';
// -----------------  Stor location Page -----------------
import Storlocation from './pages/Storlocation';
// -----------------  Checkout Page -----------------
import Checkout from './pages/Checkout';
// -----------------  Blog Page -----------------
import Blog from './pages/blog';
// -----------------  Contact Page -----------------
import Contact from './pages/Contact';
// -----------------  About Page -----------------
import About from './pages/About';
// -----------------  Cart Page -----------------
import Cart from './pages/Cart';
// -----------------  Login Page -----------------
import Login from './pages/Login';
// -----------------  Account Page -----------------
import Account from './pages/Account';
// -----------------  Store1 component -----------------
import Store1 from './component/store1';
// -----------------  Stor2 component -----------------
import Stor2 from './component/stor2';
// -----------------  Stor3 component -----------------
import Stor3 from './component/stor3';
// -----------------  Reading_article page -----------------
import Reading_article from './pages/Reading_article';
// -----------------  Product page -----------------
import Product from './pages/product';




// ================= main function =======================

function App() {
  return (

    <Rrouter>

      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/favourat' element={<Favourat/>} />
        <Route path='/shop' element={<Shop/>} >
            <Route path='stor1'  element={<Store1/>}  />
            <Route path='stor3'  element={<Stor3/>}  />
            <Route path='stor2'  element={<Stor2/>}  />
            <Route path=''  element={<Stor2/>}  />

        </Route>
        <Route path='/storlocation' element={<Storlocation/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/article' element={<Reading_article/>} />
        <Route path='*' element={<Error404/>} />

      </Routes>

    </Rrouter>
  );
}

export default App;
