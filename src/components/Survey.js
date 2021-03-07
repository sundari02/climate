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
      <div style={{marginLeft: "25%", textAlign: "left", marginRight: "2.5%"}}>

      <h2 class="intro" >Introduction</h2>
      <h4>So what exactly is climate change?</h4>
      <p>It is formally defined as <em>"a change in global or regional climate patterns, in particular a change apparent from the mid to late 20th century onwards and attributed largely to the increased levels of atmospheric carbon dioxide produced by the use of fossil fuels."</em></p>
      <p>In other words, climate change describes the long-term changes in both global, regional, and local weather patterns. These changes are caused by many factors, and we will explore some of them more in depth.</p>

      <h4>What evidence do we have that climate change is real, and is a significant problem? Some of the effects we can see are: </h4>
      <ul style={{textAlign:"left"}}>
      <li>Global temperatures <ul><li>The average surface temperature of Earth has increased about 2 degrees (F) since the 19th century. Most of this change has happened in the past 40 years. Several different agencies have tracked the annual temperature over time, and there is an undeniable upward trend, as seen below:</li></ul></li> <br/>
      <img src={"https://earthobservatory.nasa.gov/blogs/earthmatters/wp-content/uploads/sites/5/2015/01/annual_temperature_anomalies_2014.png"}/> <br/><br/>
      <li>Melting ice and glaciers <ul><li>Glaciers around the world, in the Alps, Himalayas, Andes, Rockies, Alaska, and Africa, are all shrinking.</li><li>The mass of ice has decreased significantly over time, especially in the last 30 years. 148 billion tons of ice has been lost in Antartica per year, and 279 billion tons in Greenland. Data from NASA's Gravity Recovery and Climate Experiment: </li></ul></li><br/>
      <img src={"https://i0.wp.com/www.feedbackreigns.net/wp-content/uploads/2014/08/graph-ice-mass-antarctic-nasa.gif?resize=378%2C304&ssl=1"}/> <br/><br/>
      <li>Sea level rise <ul><li>The overall sea level around the world has increased about 8 inches in the last 100 years, and the rate of increase is becoming faster every year.</li><li>This has also led to the floding of many small islands and coastal regions.</li><li>Sea level rise is caused by two things: the melting of ice and glaciers, and the expansion of seawater due to a rise in temperature. The image below shows the effect of different factors that are affecting the sea level: </li></ul></li><br/>
      <img src={"https://www.climate.gov/sites/default/files/sealevel_contributors_graph_SOTC2018_620.jpg"}/>
      <li>Increase in extreme weather events <ul><li>Specifically, the number of extreme events with record high temperatures has been increasing, while extreme low-temperature events have decreased over time.</li></ul></li>
      <li>Increase in ocean acidity<ul><li>Due to the increased emissions of carbon dioxide into the atmosphere, this has been absorbed by the oceans, causing a 30% increase in surface waters.</li></ul></li>

      </ul>

       <div className="question1">
        <label>What is one piece of evidence that shows the effects of climate change? <br/>
          <input type="text" name="answer" value={this.state.answer}
          onChange={this.handleChange}/>
        </label><br/>
        </div> <br/>

      <button onClick={this.handleClick}>
        Submit
      </button>

      {this.state.answer && this.state.count==1 ? <p>Great job! Let's keep learning more! <br/><p>My progress:</p><i className="fa fa-tree fa-2x"
      style={{color: "green"}}></i><i className="fa fa-tree fa-2x"
      style={{color: "lightGrey"}}></i><i className="fa fa-tree fa-2x"
      style={{color: "lightGrey"}}></i></p> : null}


      </div>
    );
  }
};


export default Survey
