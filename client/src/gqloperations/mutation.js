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