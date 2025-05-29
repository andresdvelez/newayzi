import { Link } from "@/modules/translations/i18n/routing";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Newayzi | Security",
  description: "Newayzi website",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col ">
      {/* Left section - Sign In Form */}
      <div className="w-full  p-4 md:p-8 lg:p-12 flex flex-col animate-slide-up">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-600 mb-12 hover:text-black transition-colors group w-fit"
        >
          <i
            className="icon-[bx--left-arrow-alt] size-4 group-hover:-translate-x-1 transition-transform"
            role="img"
            aria-hidden="true"
          />
          Volver al inicio
        </Link>
        <div className="my-auto mx-auto w-full flex items-center justify-center animate-fade-up">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
