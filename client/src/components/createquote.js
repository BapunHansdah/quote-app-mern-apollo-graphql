import react,{useState} from 'react'
import {CREATE_QUOTE} from '../gqloperations/mutation'
import {GET_ALL_QUOTES} from '../gqloperations/query'
import {GET_USER_DATA} from '../gqloperations/query'
import {useMutation} from '@apollo/client'
export default function CreateQuote(){

    const [quote,setQuote] = useState({})
    const [createQuote] = useMutation(CREATE_QUOTE,{
    	variables:{
    		newquote:quote.quote
    	},
    	refetchQueries:[
    	   {
    	   	query:GET_ALL_QUOTES
    	   }
    	]
    })


    function createNewQuote(e){
    	e.preventDefault()
        createQuote()
    }

    function handleChange(e){
      setQuote({
      	...quote,
      	[e.target.name]:e.target.value
      })
    }

	return(
		  <div className="flex m-20 justify-center">
		    <form onSubmit={createNewQuote}>
		    	<input className="p-2 border-2 border-black" type="text" name="quote" placeholder="CreateQuote" onChange={handleChange}/>
		    	<input className="p-2 border bg-black text-white" type="submit"/>
		    </form>
		  </div>
		)
}