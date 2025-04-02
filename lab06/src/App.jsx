import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './components/Nav';
import Header from './components/Header';
import Overview from './components/Overview';
function App() {

  return (
    <>
      <Container>
        <Row>
          <Col xs="3">
            <Nav/>
          </Col>
          <Col xs="9">
            <Header/>
            <Overview/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
