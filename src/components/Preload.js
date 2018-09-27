import React from 'react';
import bannerImage1 from 'images/uwloo2.jpg';
import bannerImage2 from 'images/uwloo1.jpg';
import bannerImage3 from 'images/uwloo3.jpg';
import bannerImage4 from 'images/uwloo4.jpg';
import bannerImage5 from 'images/uwloo5.jpg';

class Preload extends React.Component {
  render() {
    return (
      <div className="preload_images">
        <img src={bannerImage1} alt=""/>
        <img src={bannerImage2} alt=""/>
        <img src={bannerImage3} alt=""/>
        <img src={bannerImage4} alt=""/>
        <img src={bannerImage5} alt=""/>
      </div>
    );
  }
 }

export default Preload;