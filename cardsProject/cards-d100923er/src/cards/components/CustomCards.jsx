import { Box, Container, Typography } from "@mui/material";
import React from "react";

import CustomCardComponent from "./card/CustomCardComponent";
const cards = [
  {
    _id: "63765801e20ed868a69a62c4",
    title: "First",
    subtitle: "Business",
    description: "Simple business card for testing.",
    phone: "050-1111111",
    email: "first@gmail.com",
    web: "https://www.first.co.il",
    image: {
      url: "https://picsum.photos/200/300",
      alt: "Business card image",
    },
    address: {
      state: "",
      country: "Israel",
      city: "Tel Aviv",
      street: "Dizengoff St",
      houseNumber: 3,
      zip: 1234,
    },
    bizNumber: 1000001,
    user_id: "63765801e20ed868a69a62c2",
  },
  {
    _id: "63765802e20ed868a69a62c5",
    title: "Second",
    subtitle: "Company",
    description: "Professional services provider in Jerusalem.",
    phone: "050-2222222",
    email: "second@gmail.com",
    web: "https://www.second.co.il",
    image: {
      url: "https://picsum.photos/200/300",
      alt: "Second business card image",
    },
    address: {
      state: "Jerusalem",
      country: "Israel",
      city: "Jerusalem",
      street: "Herzl St",
      houseNumber: 10,
      zip: 5678,
    },
    bizNumber: 2000002,
    user_id: "63765802e20ed868a69a62c3",
  },
  {
    _id: "63765803e20ed868a69a62c6",
    title: "Third",
    subtitle: "Services",
    description: "Creative solutions for digital marketing.",
    phone: "050-3333333",
    email: "third@gmail.com",
    web: "https://www.third.co.il",
    image: {
      url: "https://picsum.photos/200/300",
      alt: "Third business card image",
    },
    address: {
      state: "Haifa",
      country: "Israel",
      city: "Haifa",
      street: "Allenby St",
      houseNumber: 15,
      zip: 91011,
    },
    bizNumber: 3000003,
    user_id: "63765803e20ed868a69a62c4",
  },
  {
    _id: "63765804e20ed868a69a62c7",
    title: "Fourth",
    subtitle: "Consulting",
    description: "Expert advice for business strategies.",
    phone: "050-4444444",
    email: "fourth@gmail.com",
    web: "https://www.fourth.co.il",
    image: {
      url: "https://picsum.photos/200/300",
      alt: "Fourth business card image",
    },
    address: {
      state: "Beer Sheva",
      country: "Israel",
      city: "Sheva",
      street: "Yehuda St",
      houseNumber: 20,
      zip: 121314,
    },
    bizNumber: 4000004,
    user_id: "63765804e20ed868a69a62c5",
  },
  {
    _id: "63765804e20ed868a69a62d2",
    title: "Random",
    subtitle: "Tech",
    description: "Innovative solutions for technology challenges.",
    phone: "050-5555555",
    email: "random@gmail.com",
    web: "https://www.random.co.il",
    image: {
      url: "https://picsum.photos/200/300",
      alt: "Random business card image",
    },
    address: {
      state: "Rand",
      country: "Israel",
      city: "Rand",
      street: "Rand St",
      houseNumber: 123,
      zip: 54321,
    },
    bizNumber: 1234567,
    user_id: "63765804e20ed868a69a62c5",
  },
  {
    _id: "63765804e20ed868a69a62e1",
    title: "Mock",
    subtitle: "Design",
    description: "Creative designs for modern businesses.",
    phone: "050-6666666",
    email: "mock@gmail.com",
    web: "https://www.mock.co.il",
    image: {
      url: "https://picsum.photos/200/300",
      alt: "Mock business card image",
    },
    address: {
      state: "Mock",
      country: "Israel",
      city: "Mock",
      street: "Mock St",
      houseNumber: 456,
      zip: 98765,
    },
    bizNumber: 7654321,
    user_id: "63765804e20ed868a69a62c5",
  },
  {
    _id: "63765804e20ed868a69a62f0",
    title: "Test",
    subtitle: "Lab",
    description: "Cutting-edge technologies for testing purposes.",
    phone: "050-7777777",
    email: "test@gmail.com",
    web: "https://www.test.co.il",
    image: {
      url: "https://picsum.photos/200/300",
      alt: "Test business card image",
    },
    address: {
      state: "Test",
      country: "Israel",
      city: "Test",
      street: "Test St",
      houseNumber: 789,
      zip: 12345,
    },
    bizNumber: 9876543,
    user_id: "63765804e20ed868a69a62c5",
  },
  {
    _id: "63765804e20ed868a69a62fe",
    title: "Example",
    subtitle: "Company",
    description: "Illustrative examples for educational purposes.",
    phone: "050-8888888",
    email: "example@gmail.com",
    web: "https://www.example.co.il",
    image: {
      url: "https://picsum.photos/200/300",
      alt: "Example business card image",
    },
    address: {
      state: "Example",
      country: "Israel",
      city: "Ex",
      street: "Ex St",
      houseNumber: 456,
      zip: 54321,
    },
    bizNumber: 1234567,
    user_id: "63765804e20ed868a69a62c5",
  },
];

export default function CustomCards() {
  const handleCardDelete = (_id) => {
    console.log("you deleted card no. " + _id);
  };
  const handleCardLike = (_id) => {
    console.log("you liked card no. " + _id);
  };

  return cards.length === 0 ? (
    <Typography>
      Oops… it seems there are no business cards to display
    </Typography>
  ) : (
    <Container
      sx={{
        direction: "rtl",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#6DBABA",
      }}
    >
      {cards.map((card) => (
        <Box sx={{ mb: 10 }} key={card._id}>
          <CustomCardComponent
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
          />
        </Box>
      ))}
    </Container>
  );
}
