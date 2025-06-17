import { API_ROUTES } from "@/constants/api";

import { LoginParams, LoginResponse } from "@/api/auth/types";
import { fetchClient } from "@/api/fetchClient";
import { createSession, deleteSession } from "@/api/session";

export const login = async (params: LoginParams) => {
  try {
    const data = await fetchClient<LoginResponse>(API_ROUTES.AUTH.LOGIN, {
      method: "POST",
      body: JSON.stringify(params),
    });

    if (data?.refreshToken && data?.accessToken) {
      await createSession({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logout = () => deleteSession();
