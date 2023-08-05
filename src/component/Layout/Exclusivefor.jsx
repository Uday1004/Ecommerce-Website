import React from "react";
import {Col,Row,Container} from "react-bootstrap";
import "./Sliderformatcss.css";
import { Link } from "react-router-dom";


export default function Exclusivefor({productName,shortDesc,imgUrl}) {
  return (
    <Container className="box" >
      <Row>
        <Col md={5}>
          <img className="img " src={imgUrl} alt="#" />
        </Col>
        <Col md={5}>
          <h1 className="mx-4">{productName}</h1>
          <p className="mx-4">{shortDesc}</p>
          <Link to="/shop">
          <button className="btn btn-primary mx-4">Shop now</button>
          </Link>

        </Col>
      </Row>
    </Container>
  );
}
