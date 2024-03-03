import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import CardBody from "../../cards/components/CardBody";

export default function GalTaskComp({ task }) {
  return (
    <Card sx={{ color: "text.secondary" }}>
      <CardHeader title={task.name} />
      <CardContent sx={{ paddingTop: 0, justifyContent: "space-around" }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Date: </strong>
          {task.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Type: </strong>
          {task.type}
        </Typography>
      </CardContent>
    </Card>
  );
}
