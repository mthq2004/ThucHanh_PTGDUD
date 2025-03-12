import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "react-bootstrap/esm/Container";
import Home from "./components/Home";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
