import mongoose from 'mongoose'

// mongoose.connect(process.env.MONGO_URI, {
// 	useNewUrlParser:true,
// 	useUnifiedTopology:true
// })

// mongoose.connection.on("connected",()=>{
// 	console.log("connected to mongoDB")
// })

// mongoose.connection.on("error",(err)=>{
// 	console.log("error on connecting : ", err )
// })

export const connectDB =async () =>{
	try{
       const conn = await mongoose.connect(process.env.MONGO_URI,{
       	useUnifiedTopology:true,
       	useNewUrlParser:true,
       })
       console.log("database connected");
	}
	catch(error){
       console.error(error.message)
       process.exit()
	}
}

