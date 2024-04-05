import { useEffect, useState } from "react"

const Women = () => {

    const [Prod4, setProduct4] = useState()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct4(data))
            .catch(err => console.log(err))
    }, [])

    console.log(Prod4)

    return (
        <div className="prod">

            {
                Prod4?.map((i) => i.category === "women's clothing" ?
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
                    ) : null)
            }
        </div>
    )
}
export default Women