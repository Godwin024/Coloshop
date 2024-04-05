import { useState } from "react"
import "./Register.css"
import { useSelector } from "react-redux"
import 'animate.css';
import Categories from "../Categories/Categories";

const RegisterPage = () => {

    const CategoriesData = useSelector((state) => state.persistedReducer.AllCategories)
    console.log(CategoriesData)

    const [userName, setuserName] = useState("")
    const [Password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [number, setNumber] = useState("")
    const [retypepassword, setRetypePassword] = useState("")
    const [categories, setCategories] = useState("")
    const [passwordShow, setpasswordShow] = useState("")
    const [popShow, setPopShow] = useState(false)
    const [Loadind, setLoading] = useState(false)
    const [Imageholder, setImageHolder] = useState("")


    const [inputErrors, setInputErrors] = useState({
        userNameErr: false,
        passwordErr: false,
        emailErr: false,
        numberErr: false,
        retypepasswordErr: false,
        categoriesErr: false,
        msg: ""
    })

    const handleName = (e) => {
        const newvalue = e.target.value
        setuserName(newvalue)

        if (newvalue.trim() === "") {
            setInputErrors({ userNameErr: true, msg: "You cannot leave this field empty" })
        } else {
            setInputErrors({ userNameErr: false })
        }
    }
    const handleEmail = (e) => {
        const newvalue = e.target.value
        setemail(newvalue)

        if (newvalue.trim() === "") {
            setInputErrors({ emailErr: true, msg: "You cannot leave this field empty" })
        } else {
            setInputErrors({ emailErrErr: false })
        }
    }
    const handleNumber = (e) => {
        const newvalue = e.target.value
        setNumber(newvalue)

        if (newvalue.trim() === "") {
            setInputErrors({ numberErr: true, msg: "You cannot leave this field empty" })
        } else {
            setInputErrors({ numberErr: false })
        }
    }
    const handleretypePasswrd = (e) => {
        const newvalue = e.target.value
        setRetypePassword(newvalue)

        if (newvalue.trim() === "") {
            setInputErrors({ retypepasswordErr: true, msg: "You cannot leave this field empty" })
        } else {
            setInputErrors({ retypepasswordErr: false })
        }
    }
    const handlePasswrd = (e) => {
        const newvalue = e.target.value
        setpassword(newvalue)
        if (newvalue.trim() === "") {
            setInputErrors({ passwordErr: true, msg: "You cannot leave this field empty" })
        } else {
            setInputErrors({ passwordErr: false })
        }
    }
    const handleCategories = (e) => {
        const newvalue = e.target.value
        setCategories(newvalue)
        if (newvalue.trim() === "") {
            setInputErrors({ categoriesErr: true, msg: "You cannot leave this field empty" })
        } else {
            setInputErrors({ categoriesErr: false })
        }
    }
    const imagehold = (e) => {
        const file = e.target.files[0]
        const url =
            URL.createObjectURL(file)
        setImageHolder(url)
    }
    const handleSubmit = () => {
        setLoading(true)
        if (!userName || !Password || !retypepassword || !number || !email) {
            setTimeout(() => {
                setLoading(false)
                setPopShow(true)
                setInputErrors({ msg: "Please fill all required fields" }, 2000);


            })
        }
        else {
            setPopShow(true)
            setInputErrors({ msg: "Successfully Created!!!" })

        }
    }
    return (
        <div className="Registerbox">

            <div className="Registerholder">
                <div className="reg">
                    <h1>REGISTER</h1>
                    <p>Kindly Fill in This Form to Register</p>
                </div>

                <div className="Inputfield">
                    <div className="user">
                        <h2>Username</h2>
                        <input placeholder="Enter Username" onChange={handleName} />
                        {
                            inputErrors.userNameErr ? <p style={{ fontSize: "15px", color: "white" }}>{inputErrors.msg}</p> : null
                        }
                    </div>
                    <div className="user">
                        <h2>Password</h2>
                        <input type={passwordShow ? "text" : "password"} placeholder="Enter Password" onChange={handlePasswrd} />
                        {
                            inputErrors.passwordErr ? <p style={{ fontSize: "15px", color: "white" }}>{inputErrors.msg}</p> : null
                        }
                    </div>
                    <div className="user">
                        <h2>Retype Password</h2>
                        <input type={passwordShow ? "text" : "password"} placeholder="Re-type password" onChange={handleretypePasswrd} />
                        {
                            inputErrors.retypepasswordErr ? <p style={{ fontSize: "10px", color: "white" }}>{inputErrors.msg}</p> : null
                        }
                    </div>
                    <button onClick={() => setpasswordShow(!passwordShow)} className="showbtn">{passwordShow ? "Hide" : "show"}</button>
                    <div className="user">
                        <h2>Email</h2>
                        <input placeholder="Enter your Email" onChange={handleEmail} />
                        {
                            inputErrors.emailErr ? <p style={{ fontSize: "10px", color: "white" }}>{inputErrors.msg}</p> : null
                        }
                    </div>
                    <div className="user">
                        <h2>Phone Number</h2>
                        <input placeholder="Enter Your phone Number" onChange={handleNumber} />
                        {
                            inputErrors.numberErr ? <p style={{ fontSize: "10px", color: "white" }}>{inputErrors.msg}</p> : null
                        }
                    </div>

                </div>
                <div className="catee">
                    {/* <h2>Choose a Category</h2> */}
                    <select name="hello" id="">
                        <option value="">Choose Categories</option>

                        {
                            CategoriesData?.map((categoriesdata) => (
                                <option value={categoriesdata}>{categoriesdata}</option>
                            )

                            )
                        }
                    </select>


                </div>

                <div className="imgdiv">
                    <div className="imgbox">
                        <img src={Imageholder} alt="profile" />

                    </div>
                    <input type="file" id="n" onChange={imagehold} hidden />
                    <label htmlFor="n">upload Image</label>



                </div>
                <button className="regbtn" onClick={handleSubmit}>Register</button>
            </div>
            {
                popShow ? (
                    <div className="Registerpop">
                        <div className="popcard">
                            <div className="closepop"><span onClick={() => setPopShow(false)}>X</span></div>
                            <p>{inputErrors.msg}</p>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
export default RegisterPage