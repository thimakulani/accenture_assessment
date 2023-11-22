import logo from "../assets/logo.svg";

const Navbar =()=>{
    return(
        <nav className="nav">
            <div className="logo">
                <img className="header_logo" src={logo}/>
            </div>
            <div>
                <ul>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Industries</a></li>
                    <li><a href="/">Cases</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            {/*<div className="middle-items">
                <a>Services</a>
                <a>Industries</a>
                <a>Cases</a>
                <a>Contact</a>
            </div>*/}
            <div className="header-btn">
                <button>Let's Talk</button>
            </div>
        </nav>
    );
}
export default Navbar;