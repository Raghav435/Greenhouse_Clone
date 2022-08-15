import React from 'react'
import {Route, Routes} from "react-router-dom"
import AboutUs from '../Components/Pages/AboutUs'
import Community from '../Components/Pages/Community'
import DemoPage from '../Components/Pages/DemoPage'
import HomePage from '../Components/Pages/HomePage'
import Integrations from '../Components/Pages/Integrations'
import Products from '../Components/Pages/Products'
import Recruiting from '../Components/Pages/Recruiting'
import Resources from '../Components/Pages/Resources'
import Signin from '../Components/Pages/Signin'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/integrations" element={<Integrations />} />
        
        <Route path="/resources" element={<Resources />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/requestdemo" element={<DemoPage />} />
    </Routes>
  )
}
