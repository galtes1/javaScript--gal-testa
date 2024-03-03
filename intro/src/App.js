import CardComponent from "./cards/components/CardComponent";
import GalTasksPage from "./tasks/components/GalTasksPage";
const card = {
  _id: "63765801e20ed868a69a62c4",
  title: "first",
  subtitle: "subtitle",
  description: "testing 123",
  phone: "050-0000000",
  email: "test@gmail.com",
  web: "https://www.test.co.il",
  image: {
    url: "assets/businessCard.jpg",
    alt: "Business card image",
  },
  address: {
    state: "",
    country: "country",
    city: "tel-aviv",
    street: "Shinkin",
    houseNumber: 3,
    zip: 1234,
  },
  bizNumber: 1000000,
  user_id: "63765801e20ed868a69a62c2",
};
const tasks = [
  {
    name: "dishes",
    date: "2024-01-30",
    type: "chore",
  },
  {
    name: "garbage",
    date: "2024-01-28",
    type: "chore",
  },
];
function App() {
  return <GalTasksPage tasks={tasks} />;
}

export default App;
