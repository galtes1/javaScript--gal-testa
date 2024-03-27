import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function CustomCounterPage() {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
    if (Counter % 7 === 0 || Counter.toString().includes("7")) {
      console.log(Counter + " Boom");
    }
    return () => {
      console.log("counter unmount");
    };
  }, [Counter]);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        height={200}
        width={200}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <Typography variant="h2">{Counter}</Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={{ mr: 4 }} onClick={increment}>
          +
        </Button>
        <Button variant="contained" onClick={decrement}>
          -
        </Button>
      </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={resetCounter}>
        Reset
      </Button>
    </Box>
  );
}
