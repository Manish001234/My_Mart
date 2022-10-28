import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/Navbar'
import ProductDisplay from '../components/ProductDisplay'
import ProductsPage from '../components/ProductsPage'

const AllRoutes = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Routes>
            <Route path="/" element={<ProductsPage/>}></Route>
            <Route path='/productDisplay/:id' element={<ProductDisplay/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes