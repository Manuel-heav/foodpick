import { Link } from "react-router-dom"

const SidebarLink = ({ iconName, route } : {iconName: string, route: string}) => {
  return (
    <Link to={route} className="text-white cursor-pointer">
        <img src={iconName} className="h-6"/>
    </Link>
  )
}

export default SidebarLink