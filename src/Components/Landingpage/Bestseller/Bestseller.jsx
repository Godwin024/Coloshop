import product_3 from "../../../assets/product_3.png"
import product_5 from "../../../assets/product_5.png"
import "./Bestseller.css"
const Bestseller = () => {
    return (
        <div className="Bestsellerbox">
            <div className="bestsellerwrap">
                <h1>Best Sellers</h1>
                <div className="dealbox">
                     <div className="Dealcard">
                        <div className="productimg">
                            <img src={product_5} alt="" />
                        </div>
                        <div className="text">
                            <h5>title</h5>
                           
                            <p>$7775</p>
                        </div>
                        <button className="productbtn Active">Add to chart</button>
                    </div> 
                    <div className="Dealcard">
                        <div className="productimg">
                            <img src={product_5} alt="" />
                        </div>
                        <div className="text">
                            <h5>title</h5>
                            {/* <h5>{i.category}</h5> */}
                            <p>$7775</p>
                        </div>
                        <button className="productbtn Active">Add to chart</button>
                    </div>
                    <div className="Dealcard">
                        <div className="productimg">
                            <img src={product_3} alt="" />
                        </div>
                        <div className="text">
                            <h5>title</h5>
                            {/* <h5>{i.category}</h5> */}
                            <p>$7775</p>
                        </div>
                        <button className="productbtn Active">Add to chart</button>
                    </div>
                    <div className="Dealcard">
                        <div className="productimg">
                            <img src={product_3} alt="" />
                        </div>
                        <div className="text">
                            <h5>title</h5>
                            {/* <h5>{i.category}</h5> */}
                            <p>$7775</p>
                        </div>
                        <button className="productbtn Active">Add to chart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bestseller