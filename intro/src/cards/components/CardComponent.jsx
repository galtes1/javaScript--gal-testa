import React from "react";
import { Card, CardActionArea } from "@mui/material";

import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

function CardComponent({
  card,
  handleCardDelete,
  handleCardLike,
  handleCardEdit,
  handleCardCall,
}) {
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
        card={card._id}
        handleCardDelete={() => handleCardDelete()}
        handleCardLike={() => handleCardLike()}
        handleCardEdit={() => handleCardEdit()}
        handleCardCall={() => handleCardCall()}
      />
    </Card>
  );
}

export default CardComponent;
