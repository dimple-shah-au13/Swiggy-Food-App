import React from 'react';

class ProfileClass extends React.Component {
      constructor(props) {
        super(props);
        // create State
        this.state = {
            userInfo: {
              name: "Dummy name",
              location: "Dummy location",
            }
          }
      
        // this.state = {
        //     count: 1,
        //     count2: 2,
        // }
        console.log("child- constructor" + this.props.name);
      }

      async componentDidMount() {
        //console.log("child -componentDidMount" + this.props.name);

        //Api calls
        const data = await fetch("https://api.github.com/users/dimple-shah-au13");
        const json = await data.json();
        console.log(json);
        this.setState({
           userInfo: json,
         });
         console.log("child -componentDidMount" + this.props.name);
      }

    //   componentDidUpdate() {
    //     console.log("component Did Update")
    //   }

    
      componentDidUpdate(prevProps,prevState) {
        if(this.state.count === prevState.count || 
            this.state.count2 === prevState.count2) {
                //code here
            }
    
        console.log("component Did Update")
      }

      componentWillUnmount() {
        console.log("component will Unmount")
      }

    render() {
        //const { count } = this.state;
        console.log("child -renderClass" + this.props.name)

        return (
            <>
            <h2> Profile Class Component...</h2>
            <img src={this.state.userInfo.avatar_url} />
            {/* <h3>Name: {this.props.name}</h3>
            <h3>XYZ: {this.props.xyz}</h3> */}
            <h3>Name: {this.state.userInfo.name}</h3>
            <h3>Location: {this.state.userInfo.location}</h3>
            {/* <h2>Count : {count}</h2> */}
            {/* <h2>Count : {this.state.count}</h2>
            <h2>Count : {this.state.count2}</h2> */}
            {/* <button 
             onClick={() => {
                // we do not mutate state directly
                //never do this.state = something
                this.setState({
                    count:2,
                    count2: 3,
                    
                })
             }}
            
            >setCount</button> */}



            </>
        )
    }
}



export default ProfileClass;