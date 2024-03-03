import React from "react";
import GalTaskComp from "./GalTaskComp";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function GalTasksPage({ tasks }) {
  return (
    <Card>
      <CardHeader title={tasks.name} />
      <CardContent sx={{ paddingTop: 0, justifyContent: "space-around" }}>
        <GalTaskComp task={tasks[0]} />
        <GalTaskComp task={tasks[1]} />
        {/* <Typography variant="body2" color="text.secondary">
          <strong>Date: </strong>
          {tasks.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Type: </strong>
          {tasks.type}
        </Typography> */}
      </CardContent>
    </Card>
  );
}
