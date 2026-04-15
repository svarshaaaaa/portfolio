import "./globals.css";

export const metadata = {
  title: "Varsha — Portfolio",
  description: "Product. Tech. Content.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
