import { useEffect, useState } from "react"

const Electronics = () => {
    const [Prod1, setProduct1] = useState()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(data => setProduct1(data))
            .catch(err => console.log(err))
    }, [])

    console.log(Prod1)

    return (
        // <div className="prod">
            Prod1?.map((i) => (
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
        // </div>
    )
}
export default Electronics