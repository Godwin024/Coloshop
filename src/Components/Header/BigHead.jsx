import { RiSearchLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import Dropdown from "../Dropdown/Dropdwon";
import { useState } from "react";

const BigHead = ()=>{
    const Nav = useNavigate()
    const [menuPop, setMenuPop] = useState(false)

    const cart = useSelector(state=> state.persistedReducer.CartItem)
    // console.log(rr)

   const handlMenuBar = () =>{
    setMenuPop (!menuPop);
    console.log (setMenuPop)
   }

    return(
        <>
        <div className="BigHeader">
            <div className="bigheadwrap">
               <h4>COLO<span>SHOP</span></h4>
               <div className="Nav">
                <ul>
                <Link to="/" style={{textDecoration:"none"}}>
                 <li>Home</li> </Link>  
                  <li>SHOP</li>
                  <li>PROMOTION</li>
                  <li>PAGES</li>
                  <li>BLOGS</li>
                  <li>CONTACT</li>
                </ul>
                <div className="Usericons">
                    
                <RiSearchLine className="Icons"/>
                <FaUserAlt className="Icons"/>
                <div className="cartt">
                <IoCart className="Icons" onClick={()=>Nav(`cart/$`)}/>
                <div className="Nuuum">{cart.length}</div>
                
                </div>
                </div>
               </div>
               <div className="MenuBar"  onClick={handlMenuBar}> 
               <IoMenu/>               
               </div>
            </div>
        </div>
        {menuPop ? <Dropdown setMenuPop={setMenuPop}/> :null}
    </>
    )
}
export default BigHead