import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Sticky from './Stickywall/Sticky'
import Ongoing from '../Dashboard/student/Ongoing'
import Today from '../Dashboard/course/Today'
import Upcoming from '../Dashboard/attendence/Upcoming'


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
