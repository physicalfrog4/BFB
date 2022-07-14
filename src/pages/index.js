import React, {useState} from 'react'
import NavBar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infoSection/Data';
import Services from '../components/Sevices/index';

const Home = () => {

const[isOpen, setIsOpen] = useState(false)
const toggle = () =>{
   setIsOpen(!isOpen);
  };

  return (<>
  <SideBar isOpen={isOpen} toggle={toggle} />
  <NavBar toggle={toggle}/>
  <HeroSection />
  <InfoSection {...homeObjOne}/>
  <InfoSection {...homeObjTwo}/>
  <InfoSection {...homeObjThree}/>
  <Services />
  </>
  );
};

export default Home;
