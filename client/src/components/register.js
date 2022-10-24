import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {SIGN_UP} from '../gqloperations/mutation'
export default function Register(){

	const [userInfo,setUserInfo] = useState({})
   // const [signUpUser , {data,loading,error}] = useMutation(SIGN_UP)
    // console.log(error)
   const [signUpUser] = useMutation(SIGN_UP,{
   	   variables:{
   	   	 usernew:userInfo
   	   }
   })

	function Register(e){
		e.preventDefault()
		signUpUser()
	}

	function handleChange(e){
      setUserInfo({
      	...userInfo,
      	[e.target.name]:e.target.value
      })
	}

	return(
		<div className="mx-auto">
		  <div className="mt-2">
		  <div className="max-w-sm mx-auto p-4 text-2xl font-bold bg-black text-white">REGISTER</div>
		  <form className="max-w-sm mx-auto p-4 bg-red-100" onSubmit={Register}>
		     <input className="p-2 w-full mt-2" type="text" name="firstName" onChange={handleChange} placeholder="firstname" required/>
		     <input className="p-2 w-full mt-2" type="text" name="lastName" onChange={handleChange} placeholder="lastname" required/>
		     <input className="p-2 w-full mt-2" t w-full mt-2ype="email" name="email" onChange={handleChange} placeholder="email" required/>
		     <input className="p-2 w-full mt-2" type="password" name="password" onChange={handleChange} placeholder="password" required/>
		     <button className="p-2 border bg-black text-white mt-2">Sign up</button>
		     <div className="">Already a member ? Please <span className="text-blue-800"><Link to="/login">Sign In</Link></span></div>
		  </form>
		  </div>
		</div>
		)
}