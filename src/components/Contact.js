import React from 'react';
import {useNavigate} from "react-router-dom"

const Contact = () => {
const navigate = useNavigate();

return (
<>
	<h1 style={{color:"pink"}}>A Computer Science portal for geeks.</h1>
	<button onClick={()=>navigate('/home')}>Submit</button>
</>
)
};

export default Contact;
