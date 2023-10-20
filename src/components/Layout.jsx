import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <footer>Home-Work #2</footer>
    </div>
  )
}
export default Layout