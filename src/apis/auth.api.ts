import { SignOutResponse } from "@/types/auth.type";
import { User } from "@supabase/supabase-js";
import api from "./axios.api";

export const deleteSignOut = () => {
  const url = "/api/auth/signout";
  return api.delete<SignOutResponse, SignOutResponse>(url);
};

export const getMe = () => {
  const url = "/api/auth/me";
  return api.get<User, User>(url);
};

export const getProviderLogin = (provider: string, next?: string) => {
  const url = `/api/auth/provider?provider=${provider}&next=${next}`;
  return api.get<{ message: string }, { message: string }>(url);
};
