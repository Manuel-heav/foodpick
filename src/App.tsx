import { Routes, Route } from 'react-router-dom'
import './App.css'
import AuthLayout from './_auth/AuthLayout'
import SignIn from './_auth/forms/SignIn'
import SignUp from './_auth/forms/SignUp'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import Dashboard from './_root/pages/Dashboard'
import AddPost from './_root/pages/AddPost'
import Explore from './_root/pages/Explore'
import Community from './_root/pages/Community'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route element={<SignIn />} path='/sign-in'/>
          <Route element={<SignUp />} path='/sign-up'/>
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route element={<AddPost />} path='/add-post'/>
          <Route element={<Dashboard />} path='/dashboard'/>
          <Route element={<Explore />} path='/explore'/>
          <Route element={<Dashboard />} path='/dashboard'/>
          <Route element={<Community />} path='/community'/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
