import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

//const schema = Joi;

export default function CustomFormExample() {
  const [formDate, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.vale,
    }));
  };
  return (
    <div>
      <Box component={Paper}>
        <TextField
          label="first name"
          value={FormData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <TextField label="last name" />
        <Button>submit</Button>
      </Box>
    </div>
  );
}
