import {gql} from 'apollo-server-express'

export const typeDefs = gql`
      type Query{
      	users:[User]
      	user(_id:ID!):User
      	quotes:[QuoteWithName]
      	s_quote(by:ID!):[Quotes]
            links:[Links]
            s_link(by:ID!):[Links]
            profile:User
      }

      type QuoteWithName{
            _id:ID!
            by:IdName
            quote:String
      }

       type IdName{
            _id:String
            firstName:String
            lastName:String
      }

      type User{
      	_id:ID!
      	firstName:String
      	lastName:String
      	email:String
      	password:String
      	quotes:[Quotes]
            links:[Links]
      }

      type Quotes{
            _id:ID!
      	by:ID!
      	quote:String
      }

     
      type Links{
            by:ID
            link:String
      }
      type Token{
            token:String
      }
      type Mutation{
      	signUpUser(userNew:userInputs!):User
            signInUser(userSign:userSignInputs):Token
            createQuote(quote:String):String
            createLink(link:String):String
            editQuote(_id:ID!,quote:String):String
            deleteQuote(_id:ID!):String
            deleteAllQuote:String
      }
      input userInputs{
      	firstName:String!
      	lastName:String!
      	email:String!
      	password:String!
      }
      input userSignInputs{
            email:String!
            password:String!
      }
`