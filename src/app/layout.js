
import ContextProvider from "@/components/helper/Context";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
