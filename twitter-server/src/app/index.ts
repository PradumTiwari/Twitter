import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import {prismaClient} from './clients/db'
export async function initServer(){
 const app=express();

 app.use(bodyParser.json());
 


 const graphqlServer=new ApolloServer({
    typeDefs:`
    type Query{
    sayHello:string
    sayHelloToMe(name:String!):String
    }
    
    `,
    resolvers:{
        Query:{
            sayHello:()=>"Hey from GraphQl Server",
            sayHelloToMe:(parent:any,{name}:{name:String})=>null,
        },
        
    },
 })

 await graphqlServer.start();
 app.use('/graphql',expressMiddleware(graphqlServer));
 return app
}