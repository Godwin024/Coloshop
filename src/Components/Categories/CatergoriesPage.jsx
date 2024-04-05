import "./Catergories.css"
import { useParams } from "react-router-dom"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import Electronics from "../Landingpage/NewArrival/Electronics";
import Jewelry from "../Landingpage/NewArrival/Jewelry";
import Mens from "../Landingpage/NewArrival/mens";
import Women from "../Landingpage/NewArrival/Women";
import Footer from "../Footer/Footer";
// import Mens from "../Landingpage/NewArrival/mens";

const CategoriesPage = () => {

    const [Electronicdata1, setElectronicdata1] = useState(true)
    const [accessoriesdata1, setaccessoiesdata1] = useState(false)
    const [mensdata1, setmensdata1] = useState(false)
    const [womensdata1, setwomensdata1] = useState(false)

    const changeStateEll = () => {

        setElectronicdata1(true);
        setaccessoiesdata1(false);
        setmensdata1(false);
        setwomensdata1(false);

    }
    const changeStateAllAccs = () => {

        setElectronicdata1(false);
        setaccessoiesdata1(true);
        setmensdata1(false);
        setwomensdata1(false);

    }
    const changeStateAllMenn = () => {

        setElectronicdata1(false);
        setaccessoiesdata1(false);
        setmensdata1(true);
        setwomensdata1(false);

    }
    const changeStateAllWomenn = () => {

        setElectronicdata1(false);
        setaccessoiesdata1(false);
        setmensdata1(false);
        setwomensdata1(true);

    }

    const [Prod4, setProduct4] = useState()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct4(data))
            .catch(err => console.log(err))
    }, [])

    console.log(Prod4)
    // const { categoriesname } = useParams()
    return (
        <div className="catergorybox">
            <div className="catergorywrap">
                <div className="homediv">
                    <h2>Home</h2>
                    <MdKeyboardArrowRight style={{ fontSize: '30px', color: " rgb(185, 180, 199)" }} />
                    <h2 style={{ color: " rgb(185, 180, 199)" }}>All Categories</h2>
                </div>
                <div className="prodcat">
                    <h1>Product Category</h1>
                    <div className="inputt">
                        <div className="inputext"><h5>Default Sorting</h5>
                            <MdKeyboardArrowDown className="inputext" style={{ border: "none" }} />
                        </div>
                        <div className="inputext"><h5>Show</h5>
                            <h5>6 <MdKeyboardArrowDown /></h5>
                        </div>
                    </div>
                    <div className="rightinput">
                        <div className="smmall">1</div>
                        <div className="smmall1">Of</div>
                        <div className="smmall1">3</div>
                        <MdOutlineArrowRightAlt className="arrow" />
                    </div>
                </div>
                <div className="fullpage">
                    <div className="catsection">
                        {/* <h1 className="sec">All Product</h1> */}
                        <h1 className="sec" onClick={changeStateEll}>Electronics</h1>
                        <h1 className="sec" onClick={changeStateAllAccs}>Jewelry</h1>
                        <h1 className="sec" onClick={changeStateAllMenn}>Men's clothing</h1>
                        <h1 className="sec" onClick={changeStateAllWomenn}>Women's clothing</h1>
                    </div>


                    <div className="Detailpage1">
                      {
                        Electronicdata1? <Electronics/>:
                        accessoriesdata1? <Jewelry/>:
                        mensdata1? <Mens/>: 
                        womensdata1? <Women/>: null
                      }

                      
                    </div>


                </div>
               
            </div>
            
        </div>
       
    )
}
export default CategoriesPage