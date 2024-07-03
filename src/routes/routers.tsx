import { urls } from "@/helpers";
import FlightTickets from "@/flight-tickets";
import FlightDetails from "@/flight-tickets/FlightDetails";

const routers = [
  {
    path: urls.flights,
    element: <FlightTickets />,
  },
  {
    path: urls.flightDetails,
    element: <FlightDetails />,
  },
];

export default routers;
