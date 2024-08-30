import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "RepForge",
  description: "Bodybuilding tracking app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
