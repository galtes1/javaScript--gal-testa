import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

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
    <TableContainer component={paper} key={index}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right"><Typography>Name</Typography></TableCell>
          <TableCell align="right"><Typography>Official name</Typography></TableCell>
          <TableCell align="right"><Typography>Region</Typography></TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>)
  
   

        
          <Box >
            <Typography>{country.name.common}</Typography>
          </Box>
        ))
      )
    </div>
  );
}
