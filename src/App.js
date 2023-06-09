import "./App.css";
import React from "react";
import Home from "./cmp/Home";
import edit from "./cmp/edit";
import Listing from "./cmp/Listing";
import Auth from "./cmp/Auth";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams
} from "react-router-dom";


//     <Router>
//     <Route path = "/" component = {Auth}>
//        <Route path = "auth" component = {Auth} />
//        <Route path = "about" component = {About} />
//        <Route path = "listing" component = {Listing} />
//     </Route>
//  </Router>
function App(){
  return(
    <Router>
    <Routes>
      <Route exact path="/" Component={Auth} />
      <Route path="/home" Component={Home}/>
    </Routes>
  </Router>
    );
  }
  export default App;
  
  // <div className="App">
  //   {/* <Auth/> */}
  //   <Router>
  //     <Link to="home"/>Home</Link>
  //     <Link to="about"/>About</Link>
  //     <Link to="form"/>Login</Link>
      
  //     <Switch>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/home">
  //         <home/>
  //       </Route>
  //       <Route path="/">
  //         <Auth />
  //       </Route>
  //     </Switch>
  //   </Router>
  // </div>