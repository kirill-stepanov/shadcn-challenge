import { API_ROUTES } from "@/constants/api";

import { fetchClient } from "@/api/fetchClient";
import { UsersResponse } from "@/api/users/types";

export const getUsers = async () => {
  try {
    const data = await fetchClient<UsersResponse>(API_ROUTES.USERS);
    return data;
  } catch (error) {
    console.error("Failed to get users:", error);
    throw error;
  }
};
