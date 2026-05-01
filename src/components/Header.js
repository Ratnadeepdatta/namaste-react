import { LOGO_URL } from "../Utils/contents";

   export const Header = ()=>{
            return(
                <div className="header">
                    <div className="logo-container">
                        <img src={LOGO_URL}/>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li>Home</li>
                            <li>About Me</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Contact Me</li>
                        </ul>
                    </div>
                </div>
            )
        };

        export default Header;