import "./globals.css"; 
import { AppProvider } from "../context/AppContext";

export const metadata = {
  title: "Medicine Tracker",
  description: "Track your routines safely",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
