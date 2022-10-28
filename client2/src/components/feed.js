import {useQuery} from '@apollo/client'
import {GET_ALL_QUOTES} from '../gqloperations/query'
import {useNavigate,Navigate,Link} from 'react-router-dom'

export default function Feed() {

	console.log("feed Component")
   
	const quoteData = useQuery(GET_ALL_QUOTES)
    const navigate = useNavigate()


	if(quoteData.loading) return <>loading....</>

    
    console.log(quoteData.data)
    if(quoteData.data === undefined){
      localStorage.removeItem('token')
      return <>Invalid Auth !! Login Again !!! <Link to="/login">Login</Link></>
    }
	return (
		  <> 
		     { 
		      quoteData.data.quotes.map((post,ind)=>{
		      	return(
				      <div key={ind} className="mt-5 relative max-w-xl mx-auto border shadow">
		           	     <div className="bg-black text-white p-2 round flex gap-4">
		           	        <div className="pr-5 font-bold"><Link to={`/user/${post.by._id}`} >{post.by.firstName +" "+ post.by.lastName }</Link></div>
		                    {/*<div className="cursor-pointer text-blue-400"><AiOutlineEdit size={20}/></div>*/}
		           	     </div>
		           	     <div className="absolute right-0 top-0 text-white p-2 text-red-500">
		           	        {/*<FiDelete size={20}/>*/}
		           	     </div>
		           	     <div className="p-2">{post.quote}</div>
		           	     <div className="flex text-black text-xs p-2 justify-end" >19th oct 2022 11:22</div>
		           	  </div>
		      		)
		      }).reverse()
		     }
		  </>
		)
}