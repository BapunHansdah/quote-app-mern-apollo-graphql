import mongoose from 'mongoose'

const quoteSchema = new mongoose.Schema({
	  by:{
	  	type:String,
	  	required:true,
	  	ref:"Users"
	  },
	  quote:{
	  	type:String,
	  	required:true
	  }
})

mongoose.model("Quotes",quoteSchema)