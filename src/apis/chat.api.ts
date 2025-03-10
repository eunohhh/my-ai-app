import { Chat } from "@/types/db.type";
import api from "./axios.api";

export const getChatHistory = () => {
  const url = "/api/history";
  return api.get<Chat[], Chat[]>(url);
};
