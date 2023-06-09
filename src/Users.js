import React from "react";

class Users extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: "abhishek@123.com",
  //   };
  //   console.log("hello")
  // }
  // componentDidUpdate() {
  //   console.log('>>>>rendering')
  // }
  componentWillUnmount(){
    alert("componentwillmout")
  }
  render() {
    return (
      <div>
        {/* <h1>User Component+"== "+{this.props.name}</h1>
        <button onClick={() => this.setState({ email: "bhola@123" })}>
          updata email
        </button> */}

        <h1>Student component</h1>
      </div>
    );
  }
}
export default Users;
