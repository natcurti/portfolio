import { NavbarProvider } from "@/context/NavbarContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import type { Metadata } from "next";
import { Quicksand, Roboto_Mono } from "next/font/google";

const quicksand = Quicksand({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-quicksand",
});

const roboto = Roboto_Mono({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Natália Curti | Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${quicksand.variable} ${roboto.variable}`}>
      <NavbarProvider>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </NavbarProvider>
    </html>
  );
}
