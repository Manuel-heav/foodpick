import { SidebarLinks } from "../../constants/links"
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
    const { pathname } = useLocation();
  return (
    <nav className="hidden md:flex px-8 py-10 h-100 bg-secondaryColor fixed top-0 left-0 h-screen rounded">
        <div className="flex gap-10 flex-col group">

            {
                
                SidebarLinks.map(link => {
                    const isActive = pathname === link.route;
                    return(
                        <Link key={link.label} to={link.route} className={`p-1.5 hover:bg-mainColor rounded-full text-white cursor-pointer ${isActive && 'bg-mainColor'}`}>
                            <img src={link.imgUrl} className="h-6"/>
                        </Link>
                    )
                })
            }
            
        </div>
    </nav>
  )
}

export default Sidebar