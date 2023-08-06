import Navbar from '../components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import ToastProvider from '../lib/tosat-provider'



export const metadata = {
  title: 'Juice Shop',
  description: 'Juice Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  > 
        <div  className='bg-hero' >
        <ToastProvider/>
           <Navbar/>
           {children}
          
        </div>
        <Footer/>
     
     
        </body>
    </html>
  )
}
