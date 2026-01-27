import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "PhotoStudio - Professional Photography Services",
  description: "Capturing moments that last forever. Professional photography services for weddings, events, portraits, and more.",
  keywords: "photography, wedding photography, portrait photography, event photography",
  authors: [{ name: "PhotoStudio" }],
  openGraph: {
    title: "PhotoStudio - Professional Photography Services",
    description: "Capturing moments that last forever. Professional photography services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
        <ThemeProvider>
          <main className="min-h-screen bg-black">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

