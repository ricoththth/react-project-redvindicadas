import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Bannerkitfem from '../../components/banner kitfem/Bannerkitfem';
import Menukitfem from '../../components/sub-menu-kitfem/Menukitfem';
import Arengas from '../../components/arengas/Arengas';


function Kitfem2() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Bannerkitfem/>
        <Menukitfem/>
        <Arengas/>
        <Footer/>
    </div>
  )
}

export default Kitfem2