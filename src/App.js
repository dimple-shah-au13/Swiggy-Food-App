import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
//import About from "./components/About.js";
import Error from "./components/Error.js";
import Profile from "./components/Profile.js";
import Contact from "./components/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails.js";
//import Shimmer from "./components/Shimmer.js";
import Shimmer from "./components/Shimmer.js";
//import Instamart from "./components/Instamart.js";


const Instamart = lazy(() => import("./components/Instamart.js"));

const About = lazy(() => import("./components/About.js"))

const AppLayout = () =>  {
    const [user, setUser] = useState({
        name: "Namaste React",
        email: ""
    })
    return (
        <>
        <Header/>
        {/* <Body/> */}
        <Outlet />
        <Footer/>
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense  fallback={<h1>Loading......</h1>}>
                         <About />
                           </Suspense>,
                children: [
                    {
                        path: "profile",          //parentPath/{path} => localhost:1234/about/profile
                        element: <Profile />
                    }
                ]

            },
            {
                path: "/contact",
                element: <Contact /> 
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantDetails /> 
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />} >
                    <Instamart />
                    </Suspense>
            }
           
        ]
    },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} /> );



