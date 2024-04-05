import { useEffect } from "react"
import { useDispatch } from "react-redux"
// import Features from "../../Global/Features"
import { useSelector } from "react-redux"
import { GetAllProduct} from "../../Global/Features"
// import {useHistory} from "react-router"
// import { AddToChart } from "../../Global/Features"
import { AddToChart } from "../../Global/Features"
import { useNavigate } from "react-router-dom"


const AllProduct = () => {

    
const dispatch = useDispatch()

const Nav = useNavigate()

const products = useSelector((state)=>state.persistedReducer.Allproducts)
console.log(products)
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch(GetAllProduct(data)))
            .catch(err => console.log(err))
    }, [])
    const handleCart= (i)=>{
        dispatch(AddToChart(i))
       
    };

 
    return (
        <div className="prod">


            {
            products?.map((i) => (
                <div className="Allproductcard">
                    <div className="productimg">
                        <img src={i.image} alt="" />
                    </div>
                    <div className="text">
                        <h5>{i.title}</h5>
                        {/* <h5>{i.category}</h5> */}
                        <p>${i.price}</p>
                    </div>
                    <button className="productbtn Active" onClick={()=>(handleCart(i))}>Add to cart</button>
                </div>
            ))}
        </div>

    )
}

export default AllProduct  