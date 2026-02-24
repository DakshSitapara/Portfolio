import type { Metadata } from "next";
import { Providers } from "@/components/auth/clerk-provider";

export const metadata: Metadata = {
  title: "Daksh Sitapara | Dashboard",
  description: "Daksh Sitapara's Portfolio Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
