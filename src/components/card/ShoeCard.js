import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ShoeCard = ({
  img,
  price,
  name,
  slug,
  description,
  _id,
  thumbnail,
  ...item
}) => {
  return (
    <div>
      <Link to={"/products/" + slug} className="nav-link">
        <Card
          style={{ width: "18rem", height: "20rem" }}
          className="cardcss border-0"
        >
          <Card.Img
            variant="top"
            className="rounded "
            src={thumbnail}
            height="240px"
          />
          <Card.Body>
            <Card.Title className="text-center m-3">{name}</Card.Title>
            <Card.Text className="text-center">
              <div className="fw-bold">${price}.00 </div>
              {/* <div>{description}</div> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
