import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoxClusterBottom from './Components/Bottom Box Cluster/BoxClusterBottom';
import BoxClusterTop from './Components/Top Box Cluster/BoxClusterTop';
import { useState } from 'react';

function App() {

  const [isDark, setIsDark] = useState(false);

  const handleChange = () => {
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? '' : 'bg-ting'}>
      <Container className='header'>
        <Row className='w'>
          <Col lg={10} sm={12}>
              <h1 className={isDark ? "light" : "dark"}>Social Media Dashboard</h1>
              <p className={isDark ? "light bold" : "dark bold"}>Total Followers: 23,004</p>
          </Col>
          <Col lg={2} sm={12} className='switch-section'>
              <p className={isDark ? "light bold separate-side" : "dark bold separate-side"}>Dark Mode</p>
              <label className="switch">
              <input type="checkbox" onClick={handleChange}></input>
              <span className="slider round"></span>
              </label>
          </Col>
        </Row>
      </Container>

      <BoxClusterTop isDark={isDark}></BoxClusterTop>

      <Container>
         <h1 className={isDark ? "light padding" : "dark padding"}>Overview - Today</h1>
      </Container>

      <BoxClusterBottom isDark={isDark}></BoxClusterBottom>

    </div>
  );
}

export default App;
