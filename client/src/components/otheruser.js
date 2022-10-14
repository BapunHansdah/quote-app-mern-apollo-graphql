import {useParams} from 'react-router-dom'
import {GET_OTHER_USER_DATA} from '../gqloperations/query'
import {useQuery} from '@apollo/client'
export default function OtherUser(){
	const {id} = useParams()
	const {data , loading ,error} = useQuery(GET_OTHER_USER_DATA,{
		variables:{
			userid:id
		}
	})
	// console.log(data)
	if(loading){
		return <>loading</>
	}
    const {firstName,lastName,email,quotes} = data.user
   return(
  	  <div className="grid gap-2">
			  	    <div className="flex flex-col gap-2 p-10 border-2 justify-center items-center">
			  	       <div className="w-32 h-32">
			  	         <img className="w-32 h-32 rounded-full object-cover" src="https://cdn.arstechnica.net/wp-content/uploads/2022/06/getty-musk-800x560.jpg"/>
				  	     </div>
				  	     <div className="flex gap-2">
					  	     <div className="grid gap-2">
					  	     	  <div className="h-10 p-2 text-white bg-black">Name</div>
					  	     	  <div className="h-10 p-2 text-white bg-black">Email</div>
					  	     </div>
					  	     <div className="grid gap-2 w-screen">
					  	     	  <div className="h-10 p-2 w-5/12 border-2">{firstName+" "+lastName}</div>
					  	     	  <div className="h-10 p-2 w-5/12 border-2">{email}</div>
					  	     </div>
				  	     </div>
			  	    </div>
  	    	    <div className="grid border-2 justify-items-center gap-2 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-1">
				  	        {
				  	        	quotes.map((q,i)=>{
				  	        		return(
				  	                        <div key={i} className="flex flex-wrap break-all whitespace-pre-wrap h-32 lg:w-12/12  lg:p-2 md:p-0 md:w-9/12 bg-black  border-2 text-white">{q.quote}</div>
				  	        			)
				  	        	})
				  	        }
	  	  	     </div>
  	  </div>
  	)
}