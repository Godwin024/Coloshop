import blog_1 from "../../../assets/blog_1.jpg"
import blog_2 from "../../../assets/blog_2.jpg"
import blog_3 from "../../../assets/blog_3.jpg"
import "./Lastestblog.css"

const LastestBlog =()=>{
    return(
        <div className="lastestblgbox">
            <div className="latestwrap">
           
                <div className="Latesttext">
                <h1>Latest Blogs</h1>
                </div>
                <div className="Latestmainbox">
                <div className="Blog">
                    <div className="blog1">
                        <img src={blog_1} alt="" />
                    </div>
                    <div className="blog1">
                        <img src={blog_2} alt="" />
                    </div>
                    <div className="blog1">
                        <img src={blog_3} alt="" />
                    </div>
                </div>
                </div>
             
            </div>
        </div>
    )
}
export default LastestBlog