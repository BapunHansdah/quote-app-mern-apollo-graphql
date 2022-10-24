import {Link} from 'react-router-dom'
import {TbSearch} from 'react-icons/tb'
import {GiHamburgerMenu} from 'react-icons/gi'
import {TfiClose} from 'react-icons/tfi'
import {useState} from 'react'
export default function Header(){
	console.log("header Component")

	const [menu,setMenu] = useState(false)

    function sideMenu(){
    	setMenu(!menu)

    }	

    console.log(menu)
	return(
		  <>
		     <div className="w-full bg-black text-white p-6 relative flex justify-between items-center">
		         <div className="flex gap-9">
		            <div className="flex items-center">MERN Quote</div>
		         	<div className="hidden sm:block">
		         	    <input  placeholder="search user" className="p-1 bg-black border-white border rounded-l float-left	"/>
                        <span className="flex items-center bg-gray-300 h-full text-black px-5 cursor-pointer"><TbSearch size={20}/></span>
		         	</div>
		         </div>

		         <div className="hidden sm:block">
		           <ul className="flex gap-4">
		             <li className=""><Link to="/">Home</Link></li>
		             <li className=""><Link to="/profile">Profile</Link></li>
		             <li className="">logout</li>
		           </ul>
		         </div>
                 <div onClick={sideMenu} className="block sm:hidden">
                   <GiHamburgerMenu size={20}/>
                 </div>
		     </div>
		     <div className={`w-8/12 bg-black text-white h-full z-10 absolute ${menu ? "-left-full" : "left-0"} sm:hidden p-5 shadow top-0 transition-all`}>
                  <div className="flex justify-end" onClick={sideMenu}><TfiClose size={20}/></div>
                  <div className="mt-5">
		           <ul className="flex flex-col gap-4 text-2xl">
		             <li className=""><Link to="/">Home</Link></li>
		             <li className=""><Link to="/profile">Profile</Link></li>
		             <li className="">logout</li>
		           </ul>
		           </div>
                   <div className="flex mt-5">
		         	    <input  placeholder="search user" className="p-1 bg-black border-white border rounded-l"/>
                        <span className="flex items-center bg-gray-300 text-black px-5 cursor-pointer"><TbSearch size={20}/></span>
		         	</div>
             </div>
		  </>
		)
}