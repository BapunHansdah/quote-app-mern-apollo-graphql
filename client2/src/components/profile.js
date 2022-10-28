import react from 'react'
import {FiDelete} from 'react-icons/fi'
import {AiOutlineEdit} from 'react-icons/ai'
import {useState,useEffect} from 'react'
import {useQuery,useMutation} from '@apollo/client'
import {useNavigate,Link,useParams} from 'react-router-dom'
import {GET_USER_DATA,GET_OTHER_USER_DATA} from '../gqloperations/query'
import {CREATE_QUOTE,DELETE_ALL_QUOTE,DELETE_ONE_QUOTE,EDIT_QUOTE} from '../gqloperations/mutation'
import {GET_ALL_QUOTES} from '../gqloperations/query'

function Profile(){
	// console.log("profile Component")


    const [postlist,setPostList] = useState([])
    const [quote,setQuote] = useState("")
    const [isEditing,setIsEditing] = useState(false)
    const [editId,setEditId] =useState(null)
    const [editedQuote,setEditedQuote] = useState("")
    // const [selectID,setSelectID] = useState("")


    const navigate = useNavigate()

   useEffect(()=>{
    if(!localStorage.getItem('token')){
       return navigate('/login')
    }
   },[])


   const [createQuote] = useMutation(CREATE_QUOTE,{
      variables:{
         newquote:quote
      },
      refetchQueries:[
         {
            query:GET_ALL_QUOTES
         },
         {
            query:GET_USER_DATA
         }
      ]
    })

  const {data,loading,error} = useQuery(GET_USER_DATA,{
    onCompleted:(data)=>{
      setPostList(data.profile.quotes)
    }
  }) 
   

  const [deleteAllQuote] = useMutation(DELETE_ALL_QUOTE,{
   refetchQueries:[
         {
            query:GET_ALL_QUOTES
         },
         {
            query:GET_USER_DATA
         }
      ]
  })

  const [deleteOneQuote] = useMutation(DELETE_ONE_QUOTE)

  const [editQuote] = useMutation(EDIT_QUOTE)


  if(loading) return <>Loading...</>


    
    function handleChange(e){
    	setQuote(e.target.value)
    }

    function onCreate(e){
    	e.preventDefault()
    	// console.log(quote)
      createQuote()
    	const post = [...postlist, {...data.profile.quote}]

    	setPostList(post)
    	setQuote("")
    }

    function deletePost(id){
       deleteOneQuote(
         {
            variables:{
                      id:id
                      },
            refetchQueries:[
                    {
                      query:GET_ALL_QUOTES
                    },
                    {
                      query:GET_USER_DATA
                    }
            ]
         }
       )
    	const delete_Post = postlist.filter((post,ind)=> post._id !== id)
    	setPostList(delete_Post)

    }

    function editing(edit_qoute,id){
    	setEditId(id)
      setEditedQuote(edit_qoute)
    	if(id === editId){
    		  setIsEditing(!isEditing)
    	}else{
    		  setIsEditing(true)
    	}
    }

    function editPost(){
       
       if(editedQuote.length  <= 0){
       	  console.log("input cant be empty")
       	  return ;
       }

       editQuote({

         variables:{
                   id:editId,
                   quote:editedQuote
                   },
            refetchQueries:[
                    {
                      query:GET_ALL_QUOTES
                    },
                    {
                      query:GET_USER_DATA
                    }
            ]

       })

       const edit_Post = postlist.map((post,ind)=>{
       	if(editId === post._id){
       	  return {...post,quote:editedQuote}
       	}else{
       	  return {...post}
       	}
       })
       setPostList(edit_Post)
       setEditId(null)
       setIsEditing(false)
    }

    function editingHandle(e){
    	setEditedQuote(e.target.value)
    }
    
    // return null

    if(!data){
        console.log("no data")
        localStorage.removeItem('token')
        return <>Invalid Auth !! Login Again !!! <Link to="/login">Login</Link></>
    }
    console.log(postlist)



    // const QuoteObj = {by:"bapunHansdah", quote:"quotes"}



    function deleteAllPost(){
      deleteAllQuote()
      setPostList([])
    }

	return(	
		<>
           <div className="mx-auto p-2">
              <div className="max-w-xl mx-auto bg-black text-white p-4">
                <div><img className="p-10 bg-white rounded"/></div>
           	    <div className="flex gap-2">{data.profile.firstName+" "+data.profile.lastName}</div>
           	    <div className="flex gap-2 opacity-80 text-sm">{data.profile.email}</div>
                <div className="flex gap-2">
                     <button className="p-1 border-2 border-white mt-2 text-xs rounded" >{`${postlist.length} Quotes`}</button>
                     <button onClick={deleteAllPost} className="p-1 border-2 border-white mt-2 text-xs rounded bg-red-500" >Delete All</button>
                </div>
           	  </div>
           	  <form onSubmit={onCreate} className="max-w-xl mx-auto mt-5 border-b border-black pb-4">
           	    <div className="flex gap-2"><input onChange={handleChange} value={quote} className="p-2 w-8/12  border-2 rounded" placeholder="write your quote" required/><button className="rounded w-4/12 bg-black text-white hover:opacity-80">Create Quote</button></div>
           	  </form>

           	  {
                !postlist.length && <div className="mt-5 relative max-w-xl mx-auto"><div className="flex justify-center">No quotes yet.. Try creating some !!!</div></div>  
           	  }
           	  {

           	  postlist && postlist.map((post,ind)=>{
           	  		return(
		                  <div key={ind} className="mt-5 relative max-w-xl mx-auto border shadow">
			           	     <div className="bg-black text-white p-2 round flex gap-4">
			           	        <div className="border-r pr-5 border-white font-bold">{data.profile.firstName+" "+data.profile.lastName}</div>
			                    <div className="cursor-pointer text-blue-400" onClick={()=>editing(post.quote,post._id)}><AiOutlineEdit size={20}/></div>
			           	     </div>
			           	     <div className="absolute right-0 top-0 text-white p-2 text-red-500" onClick={()=>deletePost(post._id)}><FiDelete size={20}/></div>
			           	     <div className="p-2">{post.quote}</div>
			           	     <div className={`p-2 ${isEditing && editId === post._id ? "block":"hidden"} transition-all`}>
			           	            <textarea className="w-full border border-black bg-gray-100 p-2 rounded" value={editedQuote} onChange={editingHandle} placeholder="Edit your quote"/>
			           	            <button className="p-2 bg-black  text-white rounded" onClick={()=>editPost(post._id)}>Save</button>
			           	     </div>
			           	     <div className="flex text-black text-xs p-2 justify-end" >19th oct 2022 11:22</div>	     
			           	  </div>
           	  			)
           	  	}).reverse()
           	  }

           </div>
		</>
	)
}

export default Profile;