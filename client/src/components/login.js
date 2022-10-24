import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useMutation,useQuery} from '@apollo/client'
import {SIGN_IN} from '../gqloperations/mutation'
import {useNavigate} from 'react-router-dom'
// import {GET_USER_DATA} from '../gqloperations/query'
import { useApolloClient } from "@apollo/client";
export default function Login(){

	const [userSignInfo,setSignUserInfo] = useState({})
	
	const navigate = useNavigate()
    const client = useApolloClient();

    const [signInUser,{data,error}] = useMutation(SIGN_IN,{
    	variables:{
    		 usersign:userSignInfo
    	},
    	onCompleted:(data)=>{
    		localStorage.setItem("token",data.user.token)
    		navigate("/")
    	}
    })



    function SignIn(e){
		e.preventDefault()
		signInUser()
	}


	function handleChange(e){
      setSignUserInfo({
      	...userSignInfo,
      	[e.target.name]:e.target.value
      })
	}
	return(		      
		    <div className="mx-auto">
		      <div className="max-w-sm mx-auto p-4 text-2xl font-bold bg-black text-white mt-2">LOGIN</div>
			  <form className="max-w-sm mx-auto p-4 bg-red-100" onSubmit={SignIn}>
	             <input className="p-2 w-full mt-2 " type="email" name="email" onChange={handleChange} placeholder="email" required/>
			     <input className="p-2 w-full mt-2 " type="password" name="password" onChange={handleChange} placeholder="password" required/>
			     <button className="p-2 border bg-black text-white mt-2">Login</button>
			     <div className="">New User ? <span className="text-blue-800"><Link to='/register'>Register</Link></span></div>
			  </form>
			</div>
		)
}