import { User } from "@prisma/client";
import { prismaClient } from "../clients/db";
import Jwt from "jsonwebtoken";
const JWT_SECRET='Pradyum'
class JWTService{
    public static  generateTokenForUser(user:User){
  
    const payLoad={
        id:user?.id,
        email:user?.id,
    }

    const token=Jwt.sign(payLoad,JWT_SECRET);
    return token;
}
}

export default JWTService