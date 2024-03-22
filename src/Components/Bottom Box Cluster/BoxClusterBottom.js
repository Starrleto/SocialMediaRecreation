import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SmallerBoxComponent from '../Stat Box/SmallerBoxComponent';
import facebook from '../../Assets/icon-facebook.svg';
import instagram from '../../Assets/icon-instagram.svg';
import twitter from '../../Assets/icon-twitter.svg';
import youtube from '../../Assets/icon-youtube.svg';
import up from '../../Assets/icon-up.svg';
import down from '../../Assets/icon-down.svg';

//Props:
// type, image, views, percent

const BoxClusterBottom = (props) => {
  return (
    <div>
      
    <Container>
      <Row>
        <Col lg={3} md={6} sm={12}>
          <SmallerBoxComponent isDark={props.isDark} type={"Page Views"} image={facebook} views={"87"} percent={"3%"} direction={up} color="green"></SmallerBoxComponent>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <SmallerBoxComponent isDark={props.isDark} type={"Page Views"} image={facebook} views={"87"} percent={"2%"} direction={down} color="redText"></SmallerBoxComponent>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <SmallerBoxComponent isDark={props.isDark} type={"Page Views"} image={instagram} views={"87"} percent={"2257%"} direction={up} color="green"></SmallerBoxComponent>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <SmallerBoxComponent isDark={props.isDark} type={"Page Views"} image={instagram} views={"87"} percent={"1375%"} direction={up} color="green"></SmallerBoxComponent>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={6} sm={12}>
         <SmallerBoxComponent isDark={props.isDark} type={"Page Views"} image={twitter} views={"87"} percent={"303%"} direction={up} color="green"></SmallerBoxComponent>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <SmallerBoxComponent isDark={props.isDark} type={"Page Views"} image={twitter} views={"87"} percent={"553%"} direction={up} color="green"></SmallerBoxComponent>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <SmallerBoxComponent isDark={props.isDark} type={"Page Views"} image={youtube} views={"87"} percent={"19%"} direction={down} color="redText"></SmallerBoxComponent>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <SmallerBoxComponent isDark={props.isDark} type={"Page Views"} image={youtube} views={"87"} percent={"12%"} direction={down} color="redText"></SmallerBoxComponent>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default BoxClusterBottom