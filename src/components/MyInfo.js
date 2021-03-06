import React, {useState} from "react"
import { Link } from "react-router-dom";
import { FaThumbsDown } from "react-fontawesome";


function MyInfo() {
  const [count, setCount] = useState(0);
  return (
    <div class="main" style={{marginLeft: "25%", textAlign: "left"}}>


      <p>Use the tabs to the left to explore the different aspects of climate change, and steps you can take to help! <br /><br />
      You can track your progress here on the main page. When you have completed all the activities, you will be a certified
      <b> Climate Champion</b>!</p>

      <h2>My Progress: </h2>
      <i className="fa fa-tree fa-2x"
      style={count>=1 ? {color: "green"} : {color: "lightGrey"}}></i>

       <i className="fa fa-automobile fa-2x"
      style={count>=2 ? {color: "blue"} : {color: "lightGrey"}}></i>

       <br></br><br></br>


      <button onClick={() => setCount(count + 1)}>
        Please click me!
      </button>



    </div>
  )
}

export default MyInfo;
