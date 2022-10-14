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
		<div className="flex justify-center m-10">
		  <div className="flex flex-col xl:w-4/12 lg:w-9/12 gap-3 border-2 p-10">
		  <div className="text-2xl font-bold">REGISTER</div>
		  <form className="flex flex-col gap-3" onSubmit={Register}>
		     <input className="p-2" type="text" name="firstName" onChange={handleChange} placeholder="firstname" required/>
		     <input className="p-2" type="text" name="lastName" onChange={handleChange} placeholder="lastname" required/>
		     <input className="p-2" type="email" name="email" onChange={handleChange} placeholder="email" required/>
		     <input className="p-2" type="password" name="password" onChange={handleChange} placeholder="password" required/>
		     <input className="p-2 border bg-black text-white" type="submit" value="SIGN UP"/>
		     <div className="">Already a member ? Please <span className="text-blue-800"><Link to="/login">Sign In</Link></span></div>
		  </form>
		  </div>
		</div>
		)
}