import NavBar from "./NavBar"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
