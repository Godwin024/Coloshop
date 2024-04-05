import "./verify.css"
import { GiNetworkBars } from "react-icons/gi";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { IoBluetoothSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { IoBatteryFullOutline } from "react-icons/io5";
import img1 from "../../assets/img1.png"
const Verify =()=>{
    return(
        <div className="verifybox">
         <div className="vwrapper">
            <div className="verdiv">
                <div className="updiv">
                    <div className="icon1">
                    <GiNetworkBars />
                    <MdNetworkWifi3Bar />
                    </div>
                    <div className="icon1">
                        9:41AM
                    </div>
                    <div className="icon1">
                    <IoBluetoothSharp />
                    100%
                    <IoBatteryFullOutline />
                    </div>
                </div>

                <div className="imagev">
                    <img src={img1} alt="" />
                </div>
                <div className="downv1">
                    <h1>Verification</h1>
                    <p>We will send you a <span>one time Password</span> <br /> on your Email. godwindavid5220@gmail.com</p>
                </div>
                <div className="downv">
                    <input type="" placeholder="" />
                    {/* <FaCircle /> */}
                   <button className="vb">VERIFY</button>
                   <p>Didn't Receive the Verification OTP?<span>Resend Again</span></p>
                </div>
            </div>
         </div>
        </div>
    )
}
export default Verify