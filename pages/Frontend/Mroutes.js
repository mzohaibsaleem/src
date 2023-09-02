import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Sticky from './Stickywall/Sticky'
import Ongoing from '../Dashboard/ongoing/Ongoing'
import Today from '../Dashboard/today/Today'
import Upcoming from '../Dashboard/upcoming/Upcoming'


export default function Mroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Sticky/>}/>
            <Route path='/ongoing' element={<Ongoing/>}/>
            <Route path='/today' element={<Today/>}/>
            <Route path='/upcoming' element={<Upcoming/>}/>
        </Routes>
    </div>
  )
}
