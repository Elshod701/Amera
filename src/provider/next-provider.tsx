"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

export const NextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
