import "./Deal.css"
import dealpics from "../../../assets/dealpics.png"
const Deal =()=>{
   return(
   <div className="Dealpage">
    <div className="Dealwrap">
        <div className="Dealleft">
            <img src={dealpics} alt="" />
        </div>
        <div className="Dealright">
            <div className="dealtext">
                <h1>Deal Of The Week</h1>
                <div className="circlediv">
                    <div className="circ1">
                        <h1>2</h1> <p>Day</p>
                    </div>
                    <div className="circ1">
                    <h1>10</h1> <p>Hours</p>
                    </div>
                    <div className="circ1">
                    <h1>24</h1> <p>Mins</p>
                    </div>
                    <div className="circ1">
                    <h1>53</h1> <p>Sec</p>
                    </div>
                </div>
                <button className="dealbtn">Shop Now</button>
            </div>
        </div>
    </div>

   </div>
   ) 
}
export default Deal