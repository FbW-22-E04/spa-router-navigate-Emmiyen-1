import React from 'react';
import {useNavigate} from "react-router-dom"
  
const Home = () => {
  const navigate = useNavigate();
    
  return (
      <>
        <h1 style={{color:"yellow"}}>Who is looking</h1>
        <button onClick={()=>navigate(-1)}>About</button>
      </>
  )
};
  
export default Home;