import { Routes, Route } from 'react-router-dom'
import './App.css'
import AuthLayout from './_auth/AuthLayout'
import SignIn from './_auth/forms/SignIn'
import SignUp from './_auth/forms/SignUp'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import Dashboard from './_root/pages/Dashboard'

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
          <Route element={<Dashboard />} path='/dashboard'/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
