import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoxComponent from '../Follower Box/BoxComponent';
import facebook from '../../Assets/icon-facebook.svg';
import instagram from '../../Assets/icon-instagram.svg';
import twitter from '../../Assets/icon-twitter.svg';
import youtube from '../../Assets/icon-youtube.svg';
import up from '../../Assets/icon-up.svg';
import down from '../../Assets/icon-down.svg';

//Props:
// image, tag, followers, today, color

const BoxClusterTop = (props) => {
  return (
    <div>
        
    <Container>
        <Row>
            <Col lg={3} md={6} sm={12}>
                <BoxComponent isDark={props.isDark} tag={"@nathanf"} followers={1987} today={12} color="blue" image={facebook} directionColor="up" direction={up} type="FOLLOWERS"></BoxComponent>
            </Col>
            <Col lg={3} md={6} sm={12}>
                <BoxComponent isDark={props.isDark} tag={"@nathanf"} followers={1044} today={99} color="light-blue" image={twitter} directionColor="up" direction={up} type="FOLLOWERS"></BoxComponent>
            </Col>
            <Col lg={3} md={6} sm={12}>
                <BoxComponent isDark={props.isDark} tag={"@realnathanf"} followers={"11k"} today={1099} color={"orange"} image={instagram} directionColor={"up"} direction={up} type="FOLLOWERS"></BoxComponent>
            </Col>
            <Col lg={3} md={6} sm={12}>
                <BoxComponent isDark={props.isDark} tag={"Nathan F."} followers={8239} today={144} color={"red"} image={youtube} directionColor={"down"} direction={down} type="SUBSCRIBERS"></BoxComponent>
            </Col>
        </Row>
    </Container>

    </div>
  )
}

export default BoxClusterTop