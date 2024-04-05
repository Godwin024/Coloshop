import { HashRouter, Routes, Route } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import "react-toastify/dist/ReactToastify.css";

import './App.css'
import Landingpage from './Components/Landingpage/Landingpage'
import Infopage from './Components/Infopage/Infopage'
import Header from './Components/Header/Header'
import CategoriesPage from './Components/Categories/CatergoriesPage'
import Footer from './Components/Footer/Footer'
import CartPage from './Components/Cart/CartPage'
import RegisterPage from './Components/Header/RegisterPage'
import Signup from './Components/Header/Signup'

function App() {
 return (
   
   <HashRouter>
    {/* <ToastContainer/> */}
      <Header/>
     
      <Routes>
         <Route path='/' element={<Landingpage/>}/>
         <Route path='/info: id' element={<Infopage/>}/>
            
         <Route path='/categories/:categoriesname' element={<CategoriesPage/>}/>
         <Route path='/cart/:cartname' element= {<CartPage/>}/>
         <Route path='register/:registername' element= {<RegisterPage/>}/>
         <Route path='signup/:signname' element= {<Signup/>}/>
      </Routes>
     <Footer/>
   </HashRouter>
 )

   
  
}

export default App
