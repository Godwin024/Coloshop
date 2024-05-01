import { useEffect} from "react"
import { useSelector } from "react-redux"
import "./Cart.css"
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
// import { removeFromCart } from "../Global/Features";
import { AddToChart } from "../Global/Features";
// import { AddToChart } from "../Global/CartSlice";

const CartPage = () => {

    const dispatch = useDispatch()

    const mycart = useSelector((state)=> state.persistedReducer.CartItem)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch(AddToChart(data)))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="CartBody">
            <h1>Shopping Cart</h1>
            <div>
                <div className="titles">
                    <h3 className="producttitle">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {
                        mycart?.map((i) => (
                            <div className="cart-item" key={i.id}>
                                <div className="cart-product">
                                    <img src={i.image} alt="" />
                                    <div>
                                        <h3>{i.title}</h3>
                                        <p>{i.description}</p>
                                        <button className="rebtn" onClick={()=>handleRemoveFromCart(i)}>Remove</button>
                                    </div>
                                </div>
                                <div className="cart-product-price">${i.price}</div>
                                <div className="cart-product-quantity">
                                    <button className="signbtn">-</button>
                                    <div className="count">1</div>
                                    <button  className="signbtn">+</button>
                                </div>

                                <div className="cart-product-total-price">
                                    ${i.price * i.id}
                                </div>
                            </div>


                        )
                        )}
                </div>
                <div className="cart-summary">
                    <button className="clear-cart">Clear Cart</button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>subtotal</span>
                            <span className="amount">$0{AddToChart.cartTotalAmount}</span>
                            <p>taxes and shipping calculatted at checkout</p>
                            <button className="chebtn">check out</button>
                           
                            <span> <FaArrowLeft style={{color: "red", fontSize: "20px"}} />continue Shopping</span>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    )
}
export default CartPage