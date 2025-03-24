

import { Route, Routes } from 'react-router-dom'

import Landing from './screens/landing/landing'
import Profile from './screens/profile/profile'
import Login from './screens/login/login'
import Signup from './screens/signup/signup'
import './App.css'

function App() {


  return (
   <>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>

   </>
  )
}

export default App
