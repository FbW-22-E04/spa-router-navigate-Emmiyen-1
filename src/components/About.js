import React from 'react';
import {useNavigate} from "react-router-dom"

const About = () => {
const navigate = useNavigate();

return (
<>
	<h1 style={{color:"blueviolet"}}>Let's Go!</h1>
	<button onClick={()=>navigate(-1)}>Submit</button>
</>
)
};

export default About;
