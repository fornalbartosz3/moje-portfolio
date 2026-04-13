import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import TickerBar from "@/components/TickerBar";
import Navbar from "@/components/Navbar";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bartek. | Frontend Dev",
  description: "Portfolio Bartka — Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={geist.variable}>
        {/* Fixed header: ticker + navbar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
          }}
        >
          <TickerBar />
          <Navbar />
        </div>

        {/* Offset below fixed header (~32px ticker + ~57px navbar) */}
        <div style={{ paddingTop: "89px" }}>{children}</div>
      </body>
    </html>
  );
}
