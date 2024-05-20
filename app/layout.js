import "./globals.css";
import { Kirang_Haerang, IBM_Plex_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "milk no sugar",
  description: "Milk No Sugar Theatre Company",
};

const kirangHaerang = Kirang_Haerang({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kirang-haerang",
  adjustFontFallback: false,
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${kirangHaerang.variable} ${ibmPlexMono.variable} bg-milk-brown text-true-black`}
    >
      <body className="flex justify-center">
        <div className="w-full md:w-3/5 lg:w-2/5 xl:w-2/6 px-10 md:p-0">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
