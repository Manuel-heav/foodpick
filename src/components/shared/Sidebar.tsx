import SidebarLink from "./SidebarLink"

const Sidebar = () => {
  return (
    <nav className="hidden md:flex px-8 py-10 h-100 bg-secondaryColor fixed top-0 left-0 h-screen rounded">
        <div className="flex gap-10 flex-col">
            <SidebarLink iconName="home" />
            <SidebarLink iconName="add-post" />
            <SidebarLink iconName="people" />
            <SidebarLink iconName="search" />
            <SidebarLink iconName="bookmark" />
        </div>
    </nav>
  )
}

export default Sidebar