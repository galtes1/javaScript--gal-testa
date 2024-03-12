import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

export default function CardActionBar({
  card,
  handleCardDelete,
  handleCardLike,
  handleCardEdit,
  handleCardCall,
}) {
  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={() => handleCardDelete(card._id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => handleCardEdit(card._id)}>
          <ModeEditIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={() => handleCardCall(card._id)}>
          <CallIcon />
        </IconButton>
        <IconButton onClick={() => handleCardLike(card._id)}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
}
