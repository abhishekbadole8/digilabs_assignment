import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
