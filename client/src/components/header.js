import react from 'react'
import { useApolloClient } from "@apollo/client";
import {Link,useNavigate} from 'react-router-dom'
export default function Header(){
	const token = localStorage.getItem("token")
	const navigate = useNavigate()
	const client = useApolloClient();

	function logOut(){
		client.clearStore();
		localStorage.removeItem("token")
		navigate('/login')		
	}

    
	return(
		     <div className="flex h-10 bg-black text-white justify-center items-center gap-10">
		     	<div className=""><Link to="/">Home</Link></div>

		     	
		     	{
		     		token ?
		     		<>
		     		    <div className=""><Link to="Createquote">Create</Link></div>
		            	<div className=""><Link to="profile">Profile</Link></div>
		            	<div className="" onClick={logOut}>Log Out</div>
		     		</>
		     		:
		     		<>
		     		   <div className=""><Link to="/login">Login</Link></div>
		     	       <div className=""><Link to="register">Register</Link></div>
		     		</>
		     	}
		     </div>
		)
}