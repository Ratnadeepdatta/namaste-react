    import { LOGO_URL } from "../Utils/contents";
    import { useState, useEffect} from "react";
    import { Link } from "react-router-dom";

    const Header = ()=>{

        const [btnNameReact, setbtnNameReact ] = useState("Login");
        console.log("Header Component");

// if no dependency array => useEffect is called on every render
// if dependency array empty = [] => useEffect is called one initial render(just once)
// if dependency array is [btnNameReact] => called everytime btnNameReact is updated

        useEffect(() =>{
            console.log("useEffect called");
        }, [btnNameReact]);

                return(
                    <div className="header">    
                      <Link to="/">  <div className="logo-container">
                            <img src={LOGO_URL}/>
                        </div>
                        </Link>
                        <div className="nav-items">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Me</Link></li>
                                <li><Link to="/">Services</Link></li>
                                <li><Link to="/">Portfolio</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <button className="btn-header"
                                 onClick={() => { 
                                   btnNameReact === "Login"
                                    ? setbtnNameReact("Logout") 
                                    : setbtnNameReact ("Login")
                                    }}>
                                    {btnNameReact}</button>
                            </ul>
                        </div>
                    </div> 
                )
            };

            export default Header;