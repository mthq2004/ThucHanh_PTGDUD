import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://67c824890acf98d0708518a5.mockapi.io/product"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">Danh sách sản phẩm</h2>
      <Row className="justify-content-center">
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id} md={4} lg={3} className="mb-4">
              <Card
                className="shadow-sm border-0"
                style={{ maxWidth: "500px", height: "400px" }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.product_name}
                  className="p-3 rounded"
                  style={{ maxWidth: "300px", height: "150px" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">
                    {product.product_name}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {product.brand_name}
                  </Card.Text>
                  <p className="mb-1">⭐ {product.rating}</p>
                  <Button variant="primary">Xem chi tiết</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">Đang tải dữ liệu...</p>
        )}
      </Row>
    </Container>
  );
};

export default Home;

// Dữ liệu mới cho MockAPI
