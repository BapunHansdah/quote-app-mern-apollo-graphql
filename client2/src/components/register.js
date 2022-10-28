
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SIGN_UP} from '../gqloperations/mutation'
import {useNavigate} from 'react-router-dom'

export default function Register() {
  // console.log("Register Component")
  const [userInfo,setUserInfo] = useState({})
  const navigate = useNavigate()

  const [signUpUser] = useMutation(SIGN_UP,{
    variables:{
      usernew:userInfo
    },
    onCompleted:()=>{
      navigate('/login')
    }
  });



  function handleChange(e){
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }

  function handleRegister(e){
     e.preventDefault()
     console.log(userInfo)
     signUpUser()
  }




  return (
    <div className="mx-auto p-2">
       <div className="max-w-sm mx-auto text-center font-bold text-3xl text-white px-5 py-5 bg-black rounded shadow">MERN GRAPHQL APOLLO TODO</div>    
       <form onSubmit={handleRegister} className="max-w-sm mx-auto px-5 py-5 rounded shadow">
          <div className="text-center font-bold text-2xl">Sign Up</div>
          <div className="m-2"><input onChange={handleChange} name="firstName" className="w-full p-2 rounded" placeholder="firstname" required/></div>
          <div className="m-2"><input onChange={handleChange} name="lastName"  className="w-full p-2 rounded" placeholder="lastname" required/></div>
          <div className="m-2"><input onChange={handleChange} name="email"     className="w-full p-2 rounded" placeholder="email" required/></div>
          <div className="m-2"><input onChange={handleChange} name="password"  className="w-full p-2 rounded" placeholder="password" required/></div>
          <div className="m-2"><button className="p-2 text-white bg-black rounded">Sign Up</button></div>
          <div className="m-2">Already a Member? <span className="text-blue-400"><Link to="/login">Sign In</Link></span></div>
       </form>
    </div>
  )
}
