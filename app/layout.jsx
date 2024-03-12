import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Merriweather_Sans } from "next/font/google";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "N & J Capital | Creative Real Estate Solutions",
  description:
    "Helping clients find the right investment through creative real estate solutions",
  keywords:
    "create real estate, real estate solutoins, real estate investments",
};

const merriweather_sans = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
});

const MainLayout = ({ children }) => {
  return (
    <html lang="en" className={merriweather_sans.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default MainLayout;
