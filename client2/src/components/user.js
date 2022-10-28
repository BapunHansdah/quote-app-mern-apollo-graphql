import react from 'react'
import {FiDelete} from 'react-icons/fi'
import {AiOutlineEdit} from 'react-icons/ai'
import {useState,useEffect} from 'react'
import {useQuery,useMutation} from '@apollo/client'
import {useNavigate,Link,useParams} from 'react-router-dom'
import {GET_OTHER_USER_DATA} from '../gqloperations/query'
import {CREATE_QUOTE,DELETE_ALL_QUOTE,DELETE_ONE_QUOTE,EDIT_QUOTE} from '../gqloperations/mutation'
import {GET_ALL_QUOTES} from '../gqloperations/query'

function user(){

   const navigate = useNavigate()
   const {userID} = useParams()


   console.log(userID)
   useEffect(()=>{
    if(!localStorage.getItem('token')){
       return navigate('/login')
    }    
    //UserData()
    refetch()

   },[])


    const {data,loading,error,refetch} = useQuery(GET_OTHER_USER_DATA,{
        variables:{
            userid:userID
        }
    }) 
  
  console.log(data)

  // return null

  if(loading) return <>loading....</>

  if(!data){
        console.log("no data")
        localStorage.removeItem('token')
        return <>Invalid Auth !! Login Again !!! <Link to="/login">Login</Link></>
    }



	return(	
		<>
           <div className="mx-auto p-2">
              <div className="max-w-xl mx-auto bg-black text-white p-4">
                <div><img className="p-10 bg-white rounded"/></div>
           	    <div className="flex gap-2">{data.user.firstName+" "+data.user.lastName}</div>
           	    <div className="flex gap-2 opacity-80 text-sm">{data.user.email}</div>
                <div className="flex gap-2">
                     <button className="p-1 border-2 border-white mt-2 text-xs rounded" >{`${data.user.quotes.length} Quotes`}</button>
                </div>
           	  </div>

           	  {
                !data.user.quotes.length && <div className="mt-5 relative max-w-xl mx-auto"><div className="flex justify-center">No quotes yet.. Try creating some !!!</div></div>  
           	  }
           	  {

           	   data.user.quotes.map((post,ind)=>{
           	  		return(
		                  <div key={ind} className="mt-5 relative max-w-xl mx-auto border shadow">
			           	     <div className="bg-black text-white p-2 round flex gap-4">
			           	        <div className="border-r pr-5 border-white font-bold">{data.user.firstName+" "+data.user.lastName}</div>
			           	     </div>
			           	     <div className="p-2">{post.quote}</div>
			           	     <div className="flex text-black text-xs p-2 justify-end" >19th oct 2022 11:22</div>	     
			           	  </div>
           	  			)
           	  	}).reverse()
           	  }

           </div>
		</>
	)
}

export default user;