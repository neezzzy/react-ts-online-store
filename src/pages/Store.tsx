import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

export default function Store() {
  return (
    <div>
      <div className="text-center">
        <img
          className="main-img-store d-block mx-auto mb-4"
          src="../../public/images/main.jpg"
          alt=""
        />
        <h1 className="display-5 fw-bold">FALL 2023</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            error eos cumque.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pb-4">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Explore More
            </button>
          </div>
        </div>
      </div>

      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
