"use client";

import { ThemeProvider } from "../theme-provider";
import {
  ConvexReactClient,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Toaster } from "sonner";
import { dark } from "@clerk/themes";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
