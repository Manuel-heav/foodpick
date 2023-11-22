const SidebarLink = ({ iconName } : {iconName: string}) => {
  return (
    <div className="text-white cursor-pointer">
        <img src={`/assets/icons/${iconName}.svg`} alt="Home" className="h-6"/>
    </div>
  )
}

export default SidebarLink