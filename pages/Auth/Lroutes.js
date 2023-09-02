import React  from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './login/Login'
import Reg from './reg/Reg'
export default function Lroutes() {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/reg' element={<Reg/>}/>
        </Routes>
    </div>
  )
}
