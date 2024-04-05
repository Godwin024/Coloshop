import Categories from "../Categories/Categories"

import HeroPage from "../Heropage"
import Trial from "../Trial/Trial"
import Verify from "../Verification/Verify"
import Bestseller from "./Bestseller/Bestseller"
import Deal from "./Deal Week/Deal"
import LastestBlog from "./LatestBlog/Lastestblg"
import NewArrival from "./NewArrival/NewArrival"
// import Products from "./NewArrival/Products"

const Landingpage =()=>{
    return( 
        <>
       <HeroPage/>
       <Categories/>
       <NewArrival/>
       <Deal/>
       <Bestseller/>
       <LastestBlog/>
       <Verify/>
       {/* <Trial/> */}
       </>
    )
}
export default Landingpage