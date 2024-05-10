import "./globals.css";

export const metadata = {
  title: "milk no sugar",
  description: "Milk No Sugar Theatre Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
