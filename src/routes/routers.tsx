import { urls } from "@/helpers";
import FlightTickets from "@/flight-tickets";
import Registration from "@/registration";
import Login from "@/login";

const routers = [
  {
    path: urls.home,
    element: <FlightTickets />,
  },
];

export default routers;
