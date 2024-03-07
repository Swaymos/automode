import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Auto Mode",
  description: "Get Information On Any Car Brand You Find Interesting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
