import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

export default function CustomCountries() {
  const [countriesList, setCountriesList] = useState([]);

  //
  const getAllCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountriesList(data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div>
      {countriesList.length === 0 ? (
        <Typography>Loading...</Typography>
      ) : (
        countriesList.map((country, index) => (
          <Box key={index}>
            <Typography>{country.name.common}</Typography>
          </Box>
        ))
      )}
    </div>
  );
}
