import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Babaji Group | Food Products, Polysheets & PVC Compounds",
    template: "%s | Babaji Group",
  },
  description:
    "Babaji Group — One Group. Four Industries. Endless Possibilities. Food products since 1983, ESD & non-ESD PET/HIPS sheets, Plastic Caps and PVC compounds from Najafgarh, Delhi and Bahadurgarh, Haryana.",
  keywords: [
    "Babaji Group",
    "Babaji mustard oil",
    "atta besan pulses",
    "ESD PET sheets",
    "ESD HIPS sheets",
    "PVC compounds",
    "polymer compound",
    "Bahadurgarh",
    "Najafgarh",
  ],
  icons: { icon: "/images/logo-group.webp" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
