    import { LOGO_URL } from "../Utils/contents";
    import { useState, useEffect} from "react";

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