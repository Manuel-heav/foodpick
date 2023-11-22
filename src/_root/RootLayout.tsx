import { Outlet } from 'react-router-dom';
import Sidebar from '../components/shared/Sidebar';
const RootLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default RootLayout