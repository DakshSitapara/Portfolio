"use client";

import {
  ConvexReactClient,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { dark } from "@clerk/themes";
import { AuthLoadingView } from "./auth-loading-view";
import { UnauthenticatedView } from "./unauthenticated-view";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <UnauthenticatedView />
        </Unauthenticated>
        <AuthLoading>
          <AuthLoadingView />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
