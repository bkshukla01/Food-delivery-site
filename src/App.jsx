import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import{Route,Routes} from 'react-router-dom'
import LoginPopup from './Components/LoginPopup/LoginPopup';
import Cart from './Pages/Cart/Cart';
import Footer from './Components/Footer/Footer';



function App () {
  const[showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <Navbar setShowLogin={setShowLogin}/>
    <div className = "app" >
    
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/cart" element ={<Cart/>} />
        {/* <Route path="/order" element ={<PlaceOrder/>} />   */}
      </Routes>
    </div>
      
    
    </>
  )
}

export default App