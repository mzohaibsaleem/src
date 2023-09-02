import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
    <Routes> 
        <Route path='/' element={<j/>}/>
    </Routes>
    </BrowserRouter>
  )
}
