import { SidebarLinks } from "../../constants/links"
import SidebarLink from "./SidebarLink"

const Sidebar = () => {
  return (
    <nav className="hidden md:flex px-8 py-10 h-100 bg-secondaryColor fixed top-0 left-0 h-screen rounded">
        <div className="flex gap-10 flex-col">
            {
                SidebarLinks.map(link => (
                    <SidebarLink key={link.label} iconName={link.imgUrl} route={link.route} />
                ))
            }
            
        </div>
    </nav>
  )
}

export default Sidebar