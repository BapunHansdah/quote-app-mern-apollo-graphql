import {gql} from '@apollo/client'

export const GET_ALL_QUOTES = gql`
 
 query GET_ALL_QUOTES{
     quotes{
       by{
        _id
        firstName
        lastName
       }
       quote
     }
 }

`
console.log("query")
export const GET_USER_DATA =gql`
   query GET_USER_DATA{
     profile{
       _id
       firstName
       lastName
       email
       quotes{
         _id
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
            _id
            quote
          }
        }
      }
`