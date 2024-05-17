import "./globals.css";
import { Kirang_Haerang, IBM_Plex_Mono } from "next/font/google";
import Header from "./components/Header";

export const metadata = {
  title: "milk no sugar",
  description: "Milk No Sugar Theatre Company",
};

const kirangHaerang = Kirang_Haerang({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kirang-haerang",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${kirangHaerang.variable} ${ibmPlexMono.variable} bg-milk-brown`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
