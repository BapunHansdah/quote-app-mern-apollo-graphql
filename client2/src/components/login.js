
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className="bg-gray-100 h-screen mx-auto p-2">
       <div className="max-w-sm mx-auto text-center font-bold text-3xl text-white px-5 py-5 mt-24 p-5 bg-black rounded shadow">MERN GRAPHQL APOLLO TODO</div>    
       <form className="max-w-sm mx-auto bg-red-100 px-5 py-5 rounded shadow">
          <div className="text-center font-bold text-2xl">Sign In</div>
          <div className="m-2"><input className="w-full p-2 border-2 rounded" placeholder="email"/></div>
          <div className="m-2"><input className="w-full p-2 border-2 rounded" placeholder="password"/></div>
          <div className="m-2"><button className="p-2 text-white bg-black rounded">Sign In</button></div>
          <div className="m-2">Not a Member? <span className="text-blue-400"><Link to="/register">Register</Link></span></div>
       </form>
    </div>
  )
}
