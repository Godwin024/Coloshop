import { useEffect, useState } from "react"

const Jewelry =()=>{
   
        const [Prod2, setProduct2] = useState()
        useEffect(() => {
            fetch('https://fakestoreapi.com/products/category/jewelery')
                .then(res => res.json())
                .then(data => setProduct2(data))
                .catch(err => console.log(err))
        }, [])
    
    console.log(Prod2)
        
            
           return(    
                    Prod2?.map((i)=>(
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
                    ))
    )
}
export default Jewelry