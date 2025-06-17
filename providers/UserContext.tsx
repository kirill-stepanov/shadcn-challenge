"use client";

import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { LOCALE_STORAGE } from "@/constants/storage";
import { LoginUser } from "@/api/auth/types";

type UserContextType = LoginUser | null;

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserContextType;
}) {
  const [, setUserData] = useLocalStorage<LoginUser | null>(
    LOCALE_STORAGE.USER_DATA,
    null
  );

  useEffect(() => {
    if (!user) {
      setUserData(null);
    } else {
      setUserData(user);
    }
  }, [setUserData, user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
