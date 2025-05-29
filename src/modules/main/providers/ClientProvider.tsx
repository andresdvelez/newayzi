"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { HeroUIProvider } from "@heroui/react";
import { useLocale } from "next-intl";
import React, { ReactNode } from "react";
import { enUS, esES } from "@clerk/localizations";

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const locale = useLocale();

  return (
    <HeroUIProvider>
      <ClerkProvider
        localization={locale === "en" ? enUS : esES}
        afterSignOutUrl={"/auth/sign-in"}
        signInFallbackRedirectUrl={"/"}
        waitlistUrl="/auth/waitlist"
      >
        {children}
      </ClerkProvider>
    </HeroUIProvider>
  );
};
