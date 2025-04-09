import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Teams from "./components/Team";
import Analytics from "./components/Analytics";
import Messages from "./components/Messeges";
import Intergrations from "./components/Intergrations";

function App() {
  return (
    <>
      <Container
        style={{
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Row>
          <Col xs="3" style={{ borderRight: "1px solid #e5e7eb" }}>
            <Nav />
          </Col>
          <Col xs="9">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/integrations" element={<Intergrations />} />
              {/* Bạn có thể thêm các Route khác ở đây */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
