import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"


function Layout() {
  return (
      <>
          <div className="">
              <Sidebar />
              <Outlet/>
          </div>
          
      </>
  )
}

export default Layout