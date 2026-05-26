import { Outlet } from 'react-router-dom'

import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
