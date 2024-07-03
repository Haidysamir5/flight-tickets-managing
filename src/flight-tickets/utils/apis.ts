import { FlightItemType } from "../types";

const BASE_URL = "http://localhost:3009/flights";
const headers = { "Content-type": "application/json" };

export const createFlightTicket = async (
  ticket: Omit<FlightItemType, "id">,
): Promise<FlightItemType> => {
  const body = JSON.stringify(ticket);
  const method = "POST";
  const response = await fetch(BASE_URL, { body, method, headers });
  return await response.json();
};

export const getFlightTickets = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const getFlightTicket = async (
  id: FlightItemType["id"],
): Promise<FlightItemType> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return await response.json();
};

export const editFlightTicket = async (
  ticket: FlightItemType,
): Promise<FlightItemType> => {
  const body = JSON.stringify(ticket);
  const method = "PUT";
  const response = await fetch(`${BASE_URL}/${ticket.id}`, {
    body,
    method,
    headers,
  });
  return await response.json();
};

export const deleteFlightTicket = async (id: string): Promise<string> => {
  const method = "DELETE";
  await fetch(`${BASE_URL}/${id}`, { method });
  return id;
};
