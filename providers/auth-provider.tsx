"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { AuthProviderProps } from "@/interface";

const Authprovider: React.FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Authprovider;
