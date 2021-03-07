import React from 'react';

class Survey extends React.Component {
  constructor() {
      super()
      this.state = {
        count: 0,
        answer: ""
      }
      this.handleClick = this.handleClick.bind(this)
     this.handleChange = this.handleChange.bind(this)

    }

  handleClick() {
    this.setState({count:1})
  };

  handleChange(event) {
    const {name, value} = event.target
    this.setState(
      {[name] : value}
      )
  };

  render() {

    return (
      <div style={{marginLeft: "25%", textAlign: "left"}}>

      <h2 class="intro" >Fossil Fuels</h2>
      <h4>What are fossil fuels, and how do they contribute to climate change?</h4>
      <p>Fossil fuels include natural gas, coal, and oil. These are considered follsil fuels since they are formed from the fossils of animals and plants from millions of years ago.</p>
      <p>Burning fossil fuels is the main source of energy for much of the world, but this also is a large contributor to climate change. When these fuels are burned, carbon dioxide, methane, and nitrous oxide are emitted into the atmosphere.</p>
      <p>These gases trap the heat emitted by the sun, and prevent it from leaving the atmosphere, thus causing an increase in global warming. This is often termed the "Greenhouse Effect". The diagram below illustrates the greenhouse effect in more detail: </p>
      <img src={"https://world101.cfr.org/sites/default/files/images/photo/2018/03/climate-change_greenhouse-effect_steps.png"} style={{height:"300px"}}/> <br/><br/>

      <div className="question1">
        <label>What is one greenhouse gas?<br/>
          <input type="text" name="answer" value={this.state.answer}
          onChange={this.handleChange}/>
        </label><br/>
        </div> <br/>

      <button onClick={this.handleClick}>
        Submit
      </button>

       {this.state.answer && this.state.count==1 ? <p>Awesome! Let's learn some ways we can personally help the environment! <br/><p>My progress:</p><i className="fa fa-tree fa-2x"
      style={{color: "green"}}></i><i className="fa fa-tree fa-2x"
      style={{color: "green"}}></i><i className="fa fa-tree fa-2x"
      style={{color: "lightGrey"}}></i></p> : null}


      </div>
    );
  }
}


export default Survey
