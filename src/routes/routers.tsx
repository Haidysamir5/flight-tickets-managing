import { urls } from "@/helpers";
import FlightTickets from "@/flight-tickets";

const routers = [
  {
    path: urls.home,
    element: <FlightTickets />,
  },
];

export default routers;
