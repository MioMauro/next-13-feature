import "../styles/globals.css"
import Navigation from "./shared/Navbar"



export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="container"> 
      <Navigation />     
      {children}
      </body>
    </html>
  )
}
