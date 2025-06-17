"use server";

import { cache } from "react";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { COOKIES } from "@/constants/storage";
import { APP_ROUTES } from "@/constants/routes";

export type DecodedTokenData = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  iat: number;
  exp: number;
};

type SessionLoginProps = {
  accessToken?: string;
  refreshToken?: string;
};

export const getSession = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIES.ACCESS_TOKEN)?.value;
  const refreshTokenVal = cookieStore.get(COOKIES.REFRESH_TOKEN)?.value;

  if (accessToken && refreshTokenVal) {
    return {
      accessToken: accessToken,
      refreshToken: refreshTokenVal,
    };
  }

  return null;
};

export const createSession = async (props: SessionLoginProps) => {
  const cookieStore = await cookies();

  if (props.accessToken && props.refreshToken) {
    const decoded = jwtDecode(props.accessToken) as DecodedTokenData;

    cookieStore.set(COOKIES.ACCESS_TOKEN, props.accessToken, {
      expires: decoded.exp * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    cookieStore.set(COOKIES.REFRESH_TOKEN, props.refreshToken, {
      expires: decoded.exp * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  }
};
export const deleteSession = async () => {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIES.ACCESS_TOKEN);
  cookieStore.delete(COOKIES.REFRESH_TOKEN);

  redirect(APP_ROUTES.HOME);
};

export const verifySession = cache(async () => {
  const session = await getSession();
  if (!session?.accessToken) {
    return null;
  }
  const decoded = jwtDecode(session.accessToken) as DecodedTokenData;

  return {
    id: decoded.id,
    username: decoded.username,
    email: decoded.email,
    firstName: decoded.firstName,
    lastName: decoded.lastName,
    gender: decoded.gender,
    image: decoded.image,
  };
});
