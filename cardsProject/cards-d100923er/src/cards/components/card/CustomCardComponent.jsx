import React from "react";
import { Card, CardActionArea } from "@mui/material";

import CardHeaderComponent from "./CustomCardHeaderComponent";
import CardBody from "./CustomCardBody";
import CardActionBar from "./CustomCardActionBar";

function CustomCardComponent({ card, handleCardDelete, handleCardLike }) {
  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea>
        <CardHeaderComponent image={card.image} />
        <CardBody
          title={card.title}
          subtitle={card.subtitle}
          Divider
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        _id={card._id}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
      />
    </Card>
  );
}

export default CustomCardComponent;
