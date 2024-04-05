import "./Footer.css"
import { TfiTruck } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoSkype } from "react-icons/bi";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
    return (
       <div className="Footerbody">
        <div className="smallfoot">
            <div className="smallwrap">
                <div className="footbox">
                <h4><TfiTruck style={{color: "red"}} /> FREE SHIPPING</h4>
                    <p>Suffered Alteration in Some Form</p>
                </div>

                <div className="footbox">
                <h4> <TfiTruck style={{color: "red", marginRight: 10}} />CACH ON DELIVERY</h4>
                    <p>The Internet Tend To Repeat</p>
                </div>

                <div className="footbox">
               
                <h4> <TfiTruck style={{color: "red"}} /> 45 DAYS RETURN</h4>
                    <p>Making it Look Like Readable</p>
                </div>

                <div className="footbox">
               
                <h4> <TfiTruck style={{color: "red"}} /> OPENING ALL WEEK</h4>
                    <p>8AM - 09PM</p>
                </div>
            </div>

        </div>

        <div className="footermiddle">
            <div className="middlewrap">
                <div className="fleft">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                </div>
                <div className="fright">
                    <input placeholder="Your email" style={{width: "350px", height: "55%", paddingLeft: 15, fontSize: 17, fontWeight: 400, lineHeight: 23, color: "white", border: "none" }}/>
                    <button className="fbtn">SUBSCRIBE</button>

                </div>

            </div>
            

        </div>
        <div className="bum">
            <div className="bumwrap">
                <div className="top">
                    <ul className="side1">
                        <li>Blog</li>
                        <li>FAQs</li>
                        <li>Contact us</li>
                    </ul>
                    <div className="side2">
                        <div className="secondicon"> <TiSocialFacebook  /></div>
                        <div className="secondicon"><AiOutlineTwitter /></div>
                        <div className="secondicon">  <IoLogoInstagram /></div>
                         <div className="secondicon"><BiLogoSkype /></div>
                        <div className="secondicon">  <FaPinterest /></div>
                  
                
                </div>

                </div>
                
             
            
            </div>
            
                
            </div>
            <div className="bottom">
                <div className="botwrap">
                    <h4>©2018  All Rights Reserverd. Template by <span className="span1">Colorlib</span> & distributed by <span className="span2">ThemeWagon</span></h4>

                </div>
                    
                </div>

       </div>
    )
}

export default Footer