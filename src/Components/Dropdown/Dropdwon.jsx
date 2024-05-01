import './Dropdown.css'
import { ImCancelCircle } from 'react-icons/im';



const Dropdown = ({setMenuPop}) =>{
    console.log(setMenuPop)



    const handleClose = () =>{
        setMenuPop (false)
    };

    return(
      <>
        <div className='MenuBarPopContainer'>
            <div className='MenuBarPopwrapper'>
                <div className='menuBarCanclebtn'>
                < ImCancelCircle onClick={handleClose} />
                </div>
                <div className='MenuBarcontentlist'>
                    <div>HOME</div>
                    <div>SHOP</div>
                    <div>PROMOTION</div>
                    <div>PAGES</div>
                    <div>BLOGS</div>
                    <div>CONTACT</div>
                </div>
            </div>
        </div>
      </>


    );
}
export default Dropdown