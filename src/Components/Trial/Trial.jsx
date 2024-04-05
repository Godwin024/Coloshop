import { useState } from "react"
import "./Trial.css"


const Trial =()=>{
  const [change, setChange] = useState("")
  const [color, setColor]= useState("")
  

    return(

        <div className="tribox">
            <input  className = "inputtri" type="text" placeholder="type here" onChange={()=>e. target.value("")}/>
             <button onClick={()=>setChange}>click</button>

             <div className="circle" style={setChange === color ? setChange === setColor : null}></div>

        </div>
    )
}
export default Trial