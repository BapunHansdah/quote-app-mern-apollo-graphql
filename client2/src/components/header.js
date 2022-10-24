import {Link} from 'react-router-dom'
import {TbSearch} from 'react-icons/tb'
export default function Header(){
	return(
		  <>
		     <div className="w-full bg-black text-white p-5 relative flex justify-between items-center">
		         <div className="flex gap-9">

		            <div className="flex items-center">MERN</div>
		         	<div className="flex hidden md:">
		         	    <input  placeholder="search user" className="p-1 rounded-l"/>
                        <div className="flex items-center bg-gray-300 text-black px-5 cursor-pointer"><TbSearch size={20}/></div>
		         	</div>

		         </div>

		         <div className="flex">
		             <div className=""><Link to="/">Home</Link></div>
		             <div className=""><Link to="/profile">Profile</Link></div>
		             <div className="">logout</div>
		         </div>

		     </div>
		  </>
		)
}