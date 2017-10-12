import React from 'react';

export default class Home extends React.Component{
  render(){
    const container={
      fontFamily:"Helvetica",
      
    }
    const title={
      fontSize:"34px",
      fontWeight:"bold",

    }
    const content={

    }
    return(
      <div style={container}>
        <div style={title}>
        Okanagan Fluid Dynamics Meeting
        </div>

        <div style={content}>
        The Okanagan Fluid Dynamics Meeting (OFDM) is a technical meeting for researchers in all areas of thermo-fluids. The goal is to create new and strengthen existing collaborations, and provide an ideal environment for undergraduate researchers, graduate students, and post-docs to present their research. The picturesque city of Kelowna, BC has been selected as the venue for hosting this event annually.
        </div>
      </div>
    );
  }
}