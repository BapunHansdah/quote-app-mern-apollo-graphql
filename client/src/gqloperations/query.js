import {gql} from '@apollo/client'

export const GET_ALL_QUOTES = gql`
 
 query GET_ALL_QUOTES{
    quotes{
    	by{
         _id
         firstName
      }
    	quote
    }
 }

`
console.log("query")
export const GET_USER_DATA =gql`
   query GET_USER_DATA{
     profile{
       firstName
       lastName
       email
       quotes{
         quote
       }
     }
   }
`

export const GET_OTHER_USER_DATA =gql` 
      query GET_OTHER_USER_DATA($userid:ID!){
        user(_id:$userid){
          firstName
          lastName
          email
          quotes{
            quote
          }
        }
      }
`