import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      counter: 0,
      navigate: false,
    };
  }

  handleLogin() {
    // this.setState({ navigate: false });
    let userData = JSON.parse(localStorage.getItem("userInfo"));
    let _email = this.state.email;
    let password = this.state.password;
    const abc = userData?.find(
      (data) => data?.email === _email && data?.userpass === password
    );
    // userData.isVaild=true
    if (abc) {
      console.log(abc)
    
      let objindex=userData?.findIndex((obj=>obj?.email ===abc?.email));

      const upd_obj = userData.map((obj,index,arr) => {

        if (index === objindex) {
         obj.isVaild=true;
        }
        return obj;
       })
       
       console.log('upd_obj',upd_obj);
      
      localStorage.setItem("userInfo", JSON.stringify(upd_obj));
      localStorage.setItem("loginObj", JSON.stringify(abc));
      this.setState({ navigate: true });
    } else {
      alert("not found");
    }
  }

  handleSignUp(e) {
    e.preventDefault();
    const infoData = [];
    console.log("this.state.email", this.state.email);
    console.log("this.state.email", this.state.password);
    let email = this.state.email;
    let password = this.state.password;
    let data = { email: email, userpass: password, isVaild: false };
    // if(data && data != null){
    //   let jsonData=JSON.parse(data);
    //   infoData=jsonData;
    // }
    let userData = JSON.parse(localStorage.getItem("userInfo"));
    let list = [];
    if (userData) {
      list = [...userData, data];
    } else {
      list = [data];
    }

    //console.log("my datatata==",list)
    infoData.push(list);
    //data(current => [...current, ...infoData]);

    localStorage.setItem("userInfo", JSON.stringify(list));
  }

  // handleLogout(){

  //   localStorage.clear();

  // }
  render() {
    if (this.state.navigate) {
      return <Navigate to="/home" replace={true} />;
    }
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg")`,
          textAlign: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <p style={{ fontSize: 30, fontWeight: "bold" }}>Login Page</p>
        <label style={{}}>Email</label>
        <br></br>
        <input
          style={{
            width: "35%",
            marginTop: 12,
            marginBottom: 12,
            borderRadius: 20,
            height: 20,
            padding: 12,
          }}
          type="text"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          style={{
            width: "35%",
            marginTop: 12,
            marginBottom: 12,
            borderRadius: 20,
            height: 20,
            padding: 12,
          }}
          type="text"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <br></br>
        <br></br>
        <button
          style={{
            width: "40%",
            color: "white",
            marginTop: 10,
            padding: 10,
            backgroundColor: "green",
            borderRadius: 20,
            fontSize: 17,
          }}
          onClick={this.handleLogin.bind(this)}
        >
          Login
        </button>
        <br></br>
        <button
          style={{
            width: "40%",
            color: "white",
            marginTop: 10,
            padding: 10,
            backgroundColor: "green",
            borderRadius: 20,
            fontSize: 17,
            marginBottom: "20%",
          }}
          onClick={this.handleSignUp.bind(this)}
        >
          SignIn
        </button>

        {/* <button
          style={{
            width: "40%",
            color: "white",
            marginTop: 10,
            padding: 10,
            backgroundColor: "green",
            borderRadius: 20,
            fontSize: 17,
            marginBottom:'20%'
          }}
          onClick={this.handleLogout.bind(this)}
        >
          SignOut
        </button> */}
      </div>
    );
  }
}
export default Auth;
