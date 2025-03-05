import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://67c824890acf98d0708518a5.mockapi.io/aaaa"
        );
        const data = await res.json();
        setArray(data);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
      }
    };

    fetchData();
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <Container>
      <Row className="justify-content-center">
        {array.length > 0 ? (
          array.map((item) => (
            <Col key={item.id} md={4} lg={3} className="mb-4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={item.image} alt={item.item} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Button variant="primary">Xem chi tiết</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Loading...</p> // Hiển thị khi chưa có dữ liệu
        )}
      </Row>
    </Container>
  );
};

export default Home;
