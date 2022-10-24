import react from 'react'
import {FiDelete} from 'react-icons/fi'
import {AiOutlineEdit} from 'react-icons/ai'
function Main(){
	return(	
		<>
           <div className="mx-auto p-2">
              <div className="max-w-xl mx-auto bg-black text-white p-4">
                <div><img className="p-10 bg-white rounded"/></div>
           	    <div className="flex gap-2">Bapun Hansdah</div>
           	    <div className="flex gap-2 opacity-80 text-sm">bapun@Hansdah.com</div>
           	    <div><button className="p-1 border-2 border-white mt-2 text-xs rounded" >5 Quotes</button></div>
           	  </div>
           	  <div className="max-w-xl mx-auto mt-5 border-b border-black pb-4">
           	    <div className="flex gap-2"><input className="p-2 w-8/12  border-2 rounded" placeholder="create your quote"/><button className="rounded w-4/12 bg-black text-white hover:opacity-80">Create Quote</button></div>
           	  </div>
           	  <div className="mt-5 relative max-w-xl mx-auto border shadow">
           	     <div className="bg-black text-white p-2 round flex gap-4">
           	        <div className="border-r pr-5 border-white font-bold">Bapun Hansdah</div>
                    <div className="cursor-pointer text-blue-400"><AiOutlineEdit size={20}/></div>
           	     </div>
           	     <div className="absolute right-0 top-0 text-white p-2 text-red-500"><FiDelete size={20}/></div>
           	     <div className="p-2">Who the fuck did it ! its so fucking bad ....</div>
           	     <div className="flex text-black text-xs p-2 justify-end" >19th oct 2022 11:22</div> 	     
           	  </div>
           </div>
		</>
	)
}

export default Main;