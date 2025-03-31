import React from 'react'
import MesthOne from '../Mesoth-One/MesthOne'
import MesothTwo from "../Mesoth-two/MesothTwo"
import MesothThree from "../Mesoth-Three/MesothThree"
import Header from "../../Header/Header";
import Navbar from "../../NavBar/Navbar";
import MesoFAQ from "../Mesoth-faq/MesoFAQ";
import Footer from "../../Footer/Footer"


function MesothMainPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <MesthOne />
      <MesothTwo />
      <MesothThree />
     <MesoFAQ />
     <Footer />
    </div>
  )
}

export default MesothMainPage