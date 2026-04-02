import type { Metadata } from "next";
import { Big_Shoulders, Questrial } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heading-var",
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-body-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TikTok Ads na Slovensku | GROOW Digital",
  description:
    "Začnite inzerovať na TikToku medzi prvými. Budujte svoju značku na TikToku s GROOW Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${bigShoulders.variable} ${questrial.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
