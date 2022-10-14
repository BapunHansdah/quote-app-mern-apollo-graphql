import {users,quotes} from '../db.js'
import '../models/userSchema.js'
import '../models/quoteSchema.js'
import '../models/linkSchema.js'

import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const User = mongoose.model("Users")
const Quote = mongoose.model("Quotes")
const Link = mongoose.model("Links")


import dotenv from 'dotenv'
if(process.env.NODE_ENV !== "production"){
  dotenv.config()	
}
//query
async function getUsers(){
   return await User.find({})
}
async function getSingleUserByID(_,{_id}){
   return await User.findOne({_id})
}
async function getQuotes(){
   return await Quote.find({}).populate("by")
}
async function getQuoteByID(_,{by}){
   return await Quote.find({by})
}
async function getListOfQuotes(ur){
	return await Quote.find({by:ur._id})
}
async function getLinks(){
    return await Links.find({})
}
async function getLinkByID(){
   return await Quote.find({by})
}
async function getListOfLinks(){
   return await Quote.find({by:ur._id})
}


//mutation
async function signUp(_,{userNew}){
	const user = await User.findOne({email:userNew.email})
	if(user){
		throw new Error("user already exist")
	}
	const hashedPassword = await bcrypt.hash(userNew.password,12)
	const newUser = new User({
		...userNew,
		password:hashedPassword
	})
	return await newUser.save()
}

async function signIn(_,{userSign}){
	const user =await User.findOne({email:userSign.email})
	if(!user){
		throw new Error("user does not exist exits with this mail")
	}
	const domatch = await bcrypt.compare(userSign.password,user.password)
	if(!domatch){
		throw new Error("email or password is invalid")
	} 
	const token = jwt.sign({userId:user._id},process.env.JWT_SECRET)
	return {token}		
}

async function createQuotes(_,{quote},{userId}){
	if(!userId){
	   throw new Error("You must be login in")
	}
	const newQuote =new Quote({
		quote,
		by:userId
	})
	await newQuote.save()
	return "Quote saved succesfully"
}

async function createLinks(_,{link},{userId}){
	if(!userId){
	   throw new Error("You must be login in")
	}
	const newLink =new Link({
		link,
		by:userId
	})
	await newLink.save()
	return "Link saved succesfully"
}

async function getProfile(_,arg,{userId}){
   if(!userId){
   	throw new Error("user must be login !")
   }
   return await User.findOne({_id:userId})
}


export const resolvers = {
	Query:{
		users:getUsers,
		user:getSingleUserByID,
		quotes:getQuotes,
		s_quote:getQuoteByID,
		links:getLinks,
		s_link:getLinkByID,
		profile:getProfile
	},

	User:{
         quotes:getListOfQuotes,
         links:getListOfLinks
	},

	Mutation:{
		signUpUser:signUp,
		signInUser:signIn,
		createQuote:createQuotes,
		createLink:createLinks
	}
}