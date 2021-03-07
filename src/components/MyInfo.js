import React, {useState} from "react"
import { Link } from "react-router-dom";
import Survey from "./Survey"

function MyInfo() {

  const [count, setCount] = useState(0);
  return (

    <div class="main" style={{marginLeft: "25%", textAlign: "left", marginRight: "2.5%"}}>


      <p>Let's learn about climate change! Use the tabs to the left to explore the different aspects of climate change, and steps you can take to help! <br /><br />
      When you have completed all the activities, you will be a certified
      <b> Climate Champion</b>!</p>
      <p> Feel free to share with your friends and family, and encourage them to learn more about climate change too. Just copy this link and send it to them!</p>

      <br/>





    </div>
  )
}

export default MyInfo;
