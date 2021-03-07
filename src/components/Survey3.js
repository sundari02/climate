import React from 'react';

class Survey3 extends React.Component {
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
      <div style={{marginLeft: "25%", marginRight: "2.5%", textAlign: "left"}}>

      <h2 class="intro" >Ways to Help</h2>
      <h4>How can individuals help slow down the effects of climate change?</h4>

      <ul>
      <li>Ways to reduce your "carbon footprint", which is the amount of carbon dioxide released into the atmosphere due to your energy usage: <ul><li>Unplug and save energy. Make sure to turn off lights and any electronic gadgets when you are not using them!</li><li>Transportation usage. Try to walk, carpool, use public transportation, or bike instead of driving, if possible.</li><li>Heating in the winter. Try using less power for heating by turning down the thermostat and layering up!</li></ul></li>
      <li>Other ways to help the environment:
      <ul><li>Use a reusable water bottle! This prevents the use of plastic bottles, which can be harmful for the environment.</li><li>Recycle whenever you can! This helps prevent the accumulation of landfill.</li><li>Conserve water. Heating water takes a lot of energy, so taking shorter showers and making usre not to waste water can help reduce the amount of carbon dioxide released!</li></ul></li>
      <li><b>Help spread awareness about climate change by talking to your friends, family, or classmates!</b></li>
      </ul>


      <div className="question1">
        <label>What is one thing you plan to do in the future?<br/>
          <input type="text" name="answer" value={this.state.answer}
          onChange={this.handleChange}/>
        </label><br/>
        </div> <br/>

      <button onClick={this.handleClick}>
        Submit
      </button>

       {this.state.answer && this.state.count==1 ? <p>Nice! Thank you so much for learning about climate change! <br/><p>My progress:</p><i className="fa fa-tree fa-2x"
      style={{color: "green"}}></i><i className="fa fa-tree fa-2x"
      style={{color: "green"}}></i><i className="fa fa-tree fa-2x"
      style={{color: "green"}}></i></p> : null}


      </div>
    );
  }
}


export default Survey3
