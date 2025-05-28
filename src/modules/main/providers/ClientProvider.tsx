"use client";

import { HeroUIProvider } from "@heroui/react";
import React, { ReactNode } from "react";

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
