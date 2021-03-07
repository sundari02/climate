import React, { Component } from "react";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,

} from "react-router-dom";

import ReactDOM from "react-dom"


//import fire from './fire';


import MyInfo from "./components/MyInfo"; ///< index.jsx will be automatically imported
import Survey from "./components/Survey";
import Survey2 from "./components/Survey2";
import Survey3 from "./components/Survey3";


class App extends Component {

  render() {

    return (
        <div className="App">
      <header><h1>CLIMATE CHANGE CHAMPIONS</h1></header>



      <Router>
        <nav>
            <div className="link"><a><Link to="/" >Home</Link></a> </div>
            <div className="link"><a ><Link to="/Survey" >Intro</Link></a> </div>
            <div className="link"><a ><Link to="/Survey2" >Fossil Fuels</Link></a> </div>
            <div className="link"><a ><Link to="/Survey3"
            >Ways to Help</Link></a> </div>

        </nav>



        <Switch>

          <Route path="/Survey">
            <Survey />
          </Route>
          <Route path="/Survey2">
            <Survey2 />
          </Route>
          <Route path="/Survey3">
            <Survey3 />
          </Route>
          <Route path="/">
            <MyInfo />
          </Route>
        </Switch>
      </Router>




    </div>

    );
  }

}



ReactDOM.render(<App />, document.getElementById("root"))


export default App;
