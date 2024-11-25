import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${josefin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
