import React, { Component } from "react";
import "./Home.css";
import { Navigate } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isValid:'',
      navigate: false,
      userValues: JSON.parse(localStorage.getItem("userInfo")),
      getIndex:'',
    };
  }
  
  edit(_index){
    this.setState({getIndex:_index})
    console.log('index',_index)
    let userValues= JSON.parse(localStorage.getItem("userInfo"))
    const findData = userValues.filter((_itm,index)=>index ===_index)
     console.log('itemData', findData);
    // this.state.email=findData[0].email
    // this.state.email=findData[0].userpass
    this.setState({email:findData[0].email})
    this.setState({password:findData[0].userpass})
    this.setState({isValid:findData[0].isVaild})
  }
  
  saveData(){
    //console.log('getIndex',this.state.getIndex)
    let Index=this.state.getIndex
    let userValues= JSON.parse(localStorage.getItem("userInfo"))
    let email = this.state.email;
    let password = this.state.password;
    let isVaild = this.state.isValid;
    let dataa={"email":email, "userpass":password,"isVaild":isVaild}
    userValues.splice(Index,1,dataa)
    localStorage.setItem('userInfo',JSON.stringify(userValues))
    window.location.reload(true)
    }

  del(_index){
    let userValues= JSON.parse(localStorage.getItem("userInfo"))
    userValues.splice(_index,1);
    localStorage.setItem("userInfo",JSON.stringify(userValues));
    window.location.reload(true)
   
  }
  handleLogout() {
    
    let currentObj = JSON.parse(localStorage.getItem("loginObj")) || [];
    let objindex=this.state.userValues?.findIndex((obj=>obj?.email ===currentObj?.email));
    
    let update = this.state.userValues.map((obj, index, arr) => {
      
      if (index === objindex) {
        obj.isVaild = false;
      }
      return obj;
    });
    console.log(update);

    localStorage.setItem("userInfo", JSON.stringify(update));
    this.setState({ navigate: true });
  }
  render() {
    console.log('first',this.state.isValid)
    if (this.state.navigate) {
      console.log("this.state.navigate", this.state.navigate);
      return <Navigate to="/" />;
    }
    return (
      <div>
        <nav className="navigation">
          <a href="/" className="brand-name">
            MacroSoft
          </a>
          <div className="navigation-menu">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a onClick={this.handleLogout.bind(this)}>SignOut</a>
              </li>
            </ul>
          </div>
        </nav>

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
            flex:300
          }}
          value={this.state.email}

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
          value={this.state.password}
          type="text"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          ></input>
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
          onClick={()=>this.saveData()}
        >
          savedata
        </button>
        <br></br>

          <table border ="2px" style={{fontSize:30 }}>
            <tr>
              <th>id</th>
              <th>Email</th>
              <th>password</th>
              <th>isvalid</th>
              <th>edit</th>
              <th>delete</th>
            </tr>

            
              {this.state.userValues?.map((itm, index) => (
                <tr>
                  
                  <th>{index+1}</th>
                  <th>{itm.email}</th>
                  <th>{itm.userpass}</th>
                  <th>{itm.isVaild ===true ?'true':'false'}</th>
                  <th><button style={{backgroundColor:'red',width:50,height:50}} onClick={()=>this.edit(index)}>edit</button></th>
                  <th><button style={{backgroundColor:'red',width:50,height:50}} onClick={()=>this.del(index)}>delete</button></th>
                  {/* <th><span onClick={()=>del()}>delete</span></th> */}
                </tr>
              ))}
            
          </table>
        </div>
      </div>
    );
  }
}
export default Home;
