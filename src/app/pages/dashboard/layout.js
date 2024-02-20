import Header from "@/components/Header";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <div className="dashboard">

        <Header />
        {children}
        
      </div>

    </html>
  );
}
