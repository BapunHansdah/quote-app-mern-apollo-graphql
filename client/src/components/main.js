import react,{useEffect} from 'react'
import Login from './login'
import Register from './register'
import {useQuery} from '@apollo/client'
import {useNavigate} from 'react-router-dom'
import {GET_ALL_QUOTES,GET_USER_DATA} from '../gqloperations/query'
import {Link} from 'react-router-dom'
function Main(){

  const navigate = useNavigate()
  useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login")
      }
  },[])
  

  const QueryQoutes = useQuery(GET_ALL_QUOTES) 
  const QueryUser = useQuery(GET_USER_DATA)




  if(QueryQoutes.loading || QueryUser.loading){
     return (
        <>
          loading
        </>
      )
  }

  return (

    <> 
    <div>{QueryUser.data.profile.firstName}</div>
    <div className="grid border-2 justify-items-center m-10 gap-2 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-1">
      {
          QueryQoutes.data.quotes.map((q,i)=>{
            return(
                    <div key={i} className="flex flex-wrap break-all whitespace-pre-wrap h-32 lg:w-12/12  lg:p-2 md:p-0 md:w-9/12 bg-black  border-2 text-white">{q.quote} ~<Link to={`/otheruser/${q.by._id}`}>{q.by.firstName}</Link></div> 
              )       
        })
      }
    </div> 
    </>
  )
}

export default Main;