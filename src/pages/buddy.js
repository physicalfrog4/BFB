import React, {useState} from 'react'

const Home = () => {

const[isOpen, setIsOpen] = useState(false)
const toggle = () =>{
   setIsOpen(!isOpen);
  };

  return (<h1> Hello buddy</h1>
 
  );
};

export default Home