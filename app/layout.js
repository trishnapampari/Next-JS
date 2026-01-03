import Header from "@/components/Header";
import ThemeProvider from "./context/ThemeContext";
import "./global.css";

export const metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
  description: "Hello World!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header/>
          {children}
          
          </ThemeProvider>
        {/* <header style={{ backgroundColor: 'lightblue', padding: '10px' }}>Header</header>
        {children}
        <footer style={{ backgroundColor: 'lightgray', padding: '10px' }}>Footer</footer> */}
      </body>
    </html>
  );
}
