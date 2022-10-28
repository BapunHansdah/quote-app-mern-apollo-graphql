
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useMutation} from '@apollo/client'
import {SIGN_IN} from '../gqloperations/mutation'
import {useNavigate} from 'react-router-dom'


export default function Login() {

 const [userInfo,setUserInfo] = useState({})
 const navigate = useNavigate()

 useEffect(()=>{
  if(localStorage.getItem('token')){
    navigate('/')
  }
 },[])

 const [signIn,{data,error}] = useMutation(SIGN_IN,{
    variables:{
      usersign:userInfo
    },
    onCompleted:(data)=>{
       localStorage.setItem('token',data.user.token)
       navigate('/')
    }
 })

  function handleChange(e){
      const  info={...userInfo,[e.target.name]:e.target.value}
      setUserInfo(info)
  }

  function loginHandler(e){
    e.preventDefault()
    signIn()
    console.log(userInfo)
  }



  console.log("login Component")
  return (
    <div className="mx-auto p-2">
       <div className="max-w-sm mx-auto text-center font-bold text-3xl text-white px-5 py-5 bg-black rounded shadow">MERN GRAPHQL APOLLO TODO</div>    
       <form onSubmit={loginHandler} className="max-w-sm mx-auto px-5 py-5 rounded shadow">
          <div className="text-center font-bold text-2xl">Sign In</div>
          <div className="m-2"><input onChange={handleChange} name="email"    className="w-full p-2 rounded" placeholder="email"/></div>
          <div className="m-2"><input onChange={handleChange} name="password" className="w-full p-2 rounded" placeholder="password"/></div>
          <div className="m-2"><button className="p-2 text-white bg-black rounded">Sign In</button></div>
          <div className="m-2">Not a Member? <span className="text-blue-400"><Link to="/register">Register</Link></span></div>
       </form>
    </div>
  )
}
