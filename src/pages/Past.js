import React from 'react';
import Article from '../home/Article';
import Yearsect from '../past/Yearsect';

import {Row, Col} from 'react-bootstrap';
export default class Past extends React.Component{

  componentDidMount(){
  }

  render(){
    const title={
      fontSize:"40px",
      fontWeight:"bold",
      marginBottom:"25px",
      fontFamily:"Roboto, Helvetica",

    }
    const content={
      fontFamily:"Helvetica",

    }
    return(
      <div>
        <Row>
          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Yearsect year="2015">
          A ghost-cell immersed boundary method for complex and dynamic shock-particle interactions <br/>
          Huangrui Mo<br/>
          Advisor: Prof. Fue-Sang Lien <br/><br/>


          A new technique for characterizing multi-temperature convection <br/>
          Sepehr Mohaddes<br/>
          Advisor: Prof. John Wright<br/><br/>

          Experimental investigation of the interactions of a vortex dipole with a cantilevered plate <br/>
          Eugene Zivkov<br/>
          Advisor: Prof. Sean Peterson and Prof. Serhiy Yarusevych<br/><br/>

          Assessment of the capabilities of FireFoam for simulations of large scale fire in confined compartments <br/>
          Duy Le<br/>
          Advisor: Prof. Cecile Devaud<br/><br/>

          Development and application of an improved model for microfluid transport in protein and DNA separation <br/>
          Pegah Pezeshkpour<br/>
          Advisor: Prof. Gerry Schneider and Prof. Carolyn Ren<br/><br/>

          Design optimization of a vaneless "fish-friendly" swirl injector small water turbines <br/>
          Ajith Airody<br/>
          Advisor: Prof. Sean Peterson<br/><br/>

          Application of conditional source-term extimation (CSE) to a turbulent non-premixed methanol bluff-body flame <br/>
          Kevin Lee<br/>
          Advisor: Prof. Cecile Devaud<br/><br/>

          Planar pressure PIV error optimization with applications to structural loading on a circular cylinder <br/>
          Jeffery McClure<br/>
          Advisor: Prof. Serhiy Yarusevych<br/><br/>

          High-throughput droplet sensing platform for pharmaceutical and bioengineering applications using microwave technology <br/>
          Gurkan Yesilov<br/>
          Advisor: Prof. Carolyn Ren<br/><br/>


        </Yearsect>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          2015<br/>
          Seminar Info<br/>
          Organizer: 
          Jeffrey McClure<br/>
          Date: 
          October 28th, 2015<br/>
          Time:
          9:30am - 2:30pm<br/>
          Place: 
          E5-2004<br/>
          </Col>


          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Yearsect year="2013">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/><br/>
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/><br/>
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  <br/><br/>
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br/><br/>
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
        </Yearsect>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          2013<br/>
          Seminar Info<br/>
          Organizer: 
          Chris Morton<br/>
          Date: 
          Thursday, October 23, 2013<br/>
          Time: 
          10:00am - 2:00pm<br/>
          Place: 
          E5-2004<br/>
          </Col>

          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Yearsect year="2012">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/><br/>
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/><br/>
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  <br/><br/>
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br/><br/>
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
        </Yearsect>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          2012<br/>
          Seminar Info<br/>
          Organizer:
          Chris Morton<br/>
          Date: 
          Thursday, October 26, 2012<br/>
          Time: 
          10:00am - 2:00pm<br/>
          Place: 
          E5-2004<br/>
          </Col>


          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Yearsect year="2011">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/><br/>
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/><br/>
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  <br/><br/>
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br/><br/>
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
        </Yearsect>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          2011<br/>
          Seminar Info<br/>
          Organizer: 
          Chris Morton<br/>
          Date: 
          Thursday, October 27, 2011<br/>
          Time: 
          10:00am - 2:00pm<br/>
          Place: 
          E5-2004<br/>
          </Col>


        </Row>
      </div>
    );
  }
}