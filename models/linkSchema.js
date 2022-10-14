import mongoose from 'mongoose'

const linkSchema = new mongoose.Schema({
	by:{
		type:String,
		required:true
	},
	link:{
		type:String,
		required:true
	}
})

mongoose.model("Links",linkSchema)