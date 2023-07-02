import { useState } from "react";
import Logo from "../assets/img/food-villa.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";

// const LoggedInUser = () => {
//     // API call to check authentication
//     return false;
// }

// SPA - Single page Application ??

const Title = () => (
    <a href="/">
    <img className="h-28 p-3"

    alt="logo"
    // src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"/>
    src={Logo} />
    </a>
)

const Header = () => {

    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isLoggedIn = useAuth();

    const isOnline = useOnline();


    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-100 md:bg-yellow-100">

        <Title/>
        <div className="nav-items">
        <ul className="flex py-10">
            {/* <li>Home</li> */}
            <li className="px-2">
            <Link to="/">Home</Link>
            </li>
            {/* <a href="/about">
             <li>About</li>
             </a>  */}
             <li className="px-2">
              <Link to="/about">About</Link>
             </li> 
            <li className="px-2">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2">Cart</li>
            <li className="px-2">
                <Link to="/instamart">Instamart</Link>
            </li>
        </ul>
        </div>
        <h1>{isOnline ? '✅' : '🔴'} </h1>
        {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false) }>Logout</button>
        ) : (
            <button onClick={() => setIsLoggedIn(true) }>Login</button>
        )}

        </div>
    )
};


export default Header;