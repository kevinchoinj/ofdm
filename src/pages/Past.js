import React from 'react';
import Article from '../home/Article';

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
            <Article>
            <div style={title}>
            2015
            </div>
            <div style={content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Article>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Seminar Info
          </Col>


          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <Article>
            <div style={title}>
            2013
            </div>
            <div style={content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Article>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Seminar Info
          </Col>

          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <Article>
            <div style={title}>
            2012
            </div>
            <div style={content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Article>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Seminar Info
          </Col>


          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <Article>
            <div style={title}>
            2011
            </div>
            <div style={content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Article>
          </Col>

          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Seminar Info
          </Col>


        </Row>
      </div>
    );
  }
}