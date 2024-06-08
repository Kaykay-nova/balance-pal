import { Inter } from "next/font/google";
import { Header } from "@/app/lib/components/Header/page"
import { Footer } from "@/app/lib/components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BalancePal",
  description: "Vrátíme vám vaši ztracenou rovnováhu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={inter.className}><Header/>{children}<Footer/></body>
    </html>
  );
}
