import { ApolloServer} from 'apollo-server-express';
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core'

import {typeDefs} from './Typedefs/typeDefs.js'
import {resolvers} from './Resolver/resolver.js'

import {randomBytes} from 'crypto'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import express from 'express';
import http from 'http';
import path from 'path';
import {connectDB} from './config/db.js'
import cors from 'cors'

const __dirname = path.resolve();
const app = express();
app.use(cors())
const httpServer = http.createServer(app);

if(process.env.NODE_ENV !== "production"){
  dotenv.config()	
}

connectDB()

const port = process.env.PORT || 4000

function authorize({req}){
    
    const {authorization} = req.headers

    if(authorization){
    	const {userId} = jwt.verify(authorization,process.env.JWT_SECRET)
    	return {userId}
    }
 }


const server = new ApolloServer({
	typeDefs,
	resolvers,
	context:authorize,
	plugins:[
        ApolloServerPluginDrainHttpServer({ httpServer }),
        process.env.NODE_ENV !=="production" ? 
        ApolloServerPluginLandingPageGraphQLPlayground() :
        ApolloServerPluginLandingPageDisabled()
    ]
})

//server.listen(PORT,console.log(`app running at Port ${PORT}`))
// if(process.env.NODE_ENV=="production"){
   app.use(express.static('client/build'))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
// }

await server.start();
server.applyMiddleware({
     app,
     path:'/graphql' 
});



httpServer.listen({port},()=>{
    console.log(`🚀  Server ready at ${server.graphqlPath}`);
})
