import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import Joi from "joi";

const schema = Joi.object({ 
   firstName: Joi.string().min(2),   
   lastName: Joi.string().min(2).max(10),

})

export default function CustomFormExample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.vale,
    }));
  };
  const handleSubmit = () => {
    const validateObj = schema.validate(formData);
    console.log(validateObj);
  };
  return (
    <div>
      <Box component={Paper}>
        <TextField
          label="first name"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <TextField  label="last name"
          value={formData.lastName}
          name="lastName"
          onChange={handleChange} />
        <Button onClick={handleSubmit}>submit</Button>
      </Box>
    </div>
  );
}
