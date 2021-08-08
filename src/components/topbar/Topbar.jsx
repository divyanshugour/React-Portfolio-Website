import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons"

export default function topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Divyanshu Gour</a>
                    <div className="itemContainer">
                        <Person className="icons" />
                        <span>+917049223343</span>
                        <Mail className="icons" />
                        <span>codesingers@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}