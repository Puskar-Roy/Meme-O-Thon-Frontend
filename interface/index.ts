import { ReactNode } from "react";
export interface Navitem {
  href: string;
  label: string;
}

export interface GoogleProviderConfig {
  clientId: string;
  clientSecret: string;
}


export interface AuthProviderProps {
  children: ReactNode;
}