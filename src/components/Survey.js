import React from 'react';

class Survey extends React.Component {
  render() {

    return (
      <div style={{textAlign: "center"}}>

      <h2>Introduction</h2>
      <h4>So what exactly is climate change?</h4>
      <p>It is defined as <em>"a change in global or regional climate patterns, in particular a change apparent from the mid to late 20th century onwards and attributed largely to the increased levels of atmospheric carbon dioxide produced by the use of fossil fuels."</em></p>


      <ul style={{textAlign:"left"}}>
      <li>Increased levels of carbon dioxide
      <ul><li>Fossil fuels</li></ul>
      </li>

      </ul>

      </div>
    );
  }
}


export default Survey
