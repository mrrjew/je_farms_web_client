import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/utils/reduxProvider.jsx";

import { DM_Serif_Display } from "next/font/google";

const inter = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "JE - Farms",
  description: "Best Coconut plug",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
