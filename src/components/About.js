import React from "react";

//import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";

// const About = () => {
  // return (
  //   <div>
  //       <h1>About Us Page</h1>
  //       <p>Welcome to About page....</p>
  //       {/* <Outlet /> */}
  //       <ProfileFunctional name={"Dimple"} />
  //       <Profile name={"Classy-Dimple"} xyz={"abc"} />


  //   </div>
  // )
// }


// creating class based component

class About extends React.Component {
  constructor(props){
    super(props);
    
    //console.log("parent-constructor");

  }

  componentDidMount(){
    //API call
    // this.timer = setInterval(() => {
    //   console.log("Helloo Dimple Shah")
    // }, 1000);

    //console.log("parent -ComponentDidMount")
  }

  componentWillUnmount() {
    //clearInterval(this.timer); 
      console.log(" component will Unmount")
    }
  


  render() {
    //console.log("parent-renderClass")

    return (
      <div>
          <h1>About Us Page</h1>
          <p>Welcome to About page....</p>
          {/* <Outlet /> */}
          <ProfileFunctional name={"Dimple"} />
           <Profile name={"First-Child"} xyz={"abc"} />
          {/* <Profile name={"Second-Child"} xyz={"abc"} /> */}

  
      </div>
    ) 
  }
}

export default About;