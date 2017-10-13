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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/><br/>
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/><br/>
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  <br/><br/>
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br/><br/>
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
        </Yearsect>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Seminar Info
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
          Seminar Info
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
          Seminar Info
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
          Seminar Info
          </Col>


        </Row>
      </div>
    );
  }
}