import {gql} from '@apollo/client'

export const SIGN_UP = gql`
   
mutation signUp($usernew : userInputs!){
  user:signUpUser(userNew:$usernew){
     firstName
  }
}


`

export const SIGN_IN = gql`
   
mutation signIn($usersign:userSignInputs!){
  user:signInUser(userSign:$usersign){
    token
  } 
}


`

export const CREATE_QUOTE =gql`
  mutation createQ($newquote:String){
     quote:createQuote(quote:$newquote)
  }
`

export const EDIT_QUOTE = gql`
   mutation editQuotes($id:ID!,$quote:String){
      quote:editQuote(_id:$id,quote:$quote)
   }  
`

export const DELETE_ALL_QUOTE = gql`
   mutation deletAll{
     quote:deleteAllQuote
   }
`

export const DELETE_ONE_QUOTE=gql`
   mutation deleteQuote($id:ID!){
    quote:deleteQuote(_id:$id)
  }
`
