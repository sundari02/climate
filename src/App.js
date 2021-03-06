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
//import Survey2 from "./components/Survey2";
//import Survey3 from "./components/Survey3";


class App extends Component {

  render() {

    return (
        <div className="App">
      <h1>Climate Champion</h1>



      <Router>
        <nav>
            <a className="link"><Link to="/" >Home</Link></a>
            <a className="link"><Link to="/Survey" >Intro</Link></a>
            <a className="link"><Link to="/Survey" >Survey 2</Link></a>
            <a className="link"><Link to="/Survey"
            >Survey 3</Link></a>


        </nav>

        <Switch>

          <Route path="/Survey">
            <Survey />
          </Route>
          <Route path="/Survey">
            <Survey />
          </Route>
          <Route path="/Survey">
            <Survey />
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
