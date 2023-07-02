import { useEffect, useState } from "react";


const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0.2);

    // useEffect(() => {
    //     // API call
    //     //console.log("useEffect")
    // })
    //console.log("renderFunc");

  //   useEffect(() => {
  //     // API call
  //     //console.log("useEffect")
  // }, [count,count2])

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello Dimpsssss")
    },1000)
    console.log("useEffect")

    return () => {
      clearInterval(timer);
      console.log("UseEffect return")
    }
  },[]);

  console.log("render")

  return (
    <div>
        <h2>Profile functional component....</h2>
        <h3>Name: {props.name} </h3>
        <h3>Count : {count}</h3>
        <h3>Count2 : {count2}</h3>
        <button onClick={() => {setCount(1), setCount2(3)}}>Count</button>

    </div>
  )
}

export default Profile;