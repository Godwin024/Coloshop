import { useEffect, useState } from "react"

const Mens =()=>{
    const [Prod3, setProduct3] = useState()
    useEffect(() => {
        fetch ('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct3(data))
            .catch(err => console.log(err))
    }, [])

console.log(Prod3)
    
        
       return(    
                Prod3?.map((i)=> i.category==="men's clothing"?
                (
                    <div className="Allproductcard">
                        <div className="productimg">
                            <img src={i.image} alt="" />
                        </div>
                        <div className="text">
                            <h5>{i.title}</h5>
                            {/* <h5>{i.category}</h5> */}
                            <p>${i.price}</p>
                        </div>
                        <button className="productbtn Active">Add to cart</button>
                    </div>
                ) :null)

        
    )
}
 export default Mens