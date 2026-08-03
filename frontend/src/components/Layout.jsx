import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Layout: shared page shell rendered for every route — Header, then the
// active route's element via Outlet, then Footer.
// Takes no props. Returns the page shell markup.
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
