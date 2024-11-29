import logo from "../../assests/ivf-pulse-logo.svg"
import './Navbar.css'
import hamburgger from "../../assests/hamburgger.svg"

const Navbar=()=>{
    return(
        <div className="nav-container">
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <p className="text">Donor Programme</p>
                <p className="text">Fertility Preservation</p>
                <p className="text">Advanced Treatments</p>
                <p className="text">Infertility Treatments</p>
                <p className="text">IVF Testing</p>
                <p className="text">About Us</p>
                <button className="nav-btn btn-text">Talk to us  {' →'}</button>
            </div>

            <div className="hamburgger">
                <img src={hamburgger} className="menu_img" alt=""/>
            </div>
        </div>
    )
}

export default Navbar;