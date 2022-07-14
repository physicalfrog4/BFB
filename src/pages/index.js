import React, {useState} from 'react'
import NavBar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import HeroSection from '../components/HeroSection';

const Home = () => {

const[isOpen, setIsOpen] = useState(false)
const toggle = () =>{
   setIsOpen(!isOpen);
  };

  return (<>
  <SideBar isOpen={isOpen} toggle={toggle} />
  <NavBar toggle={toggle}/>
  <HeroSection />
  </>
  );
};

export default Home