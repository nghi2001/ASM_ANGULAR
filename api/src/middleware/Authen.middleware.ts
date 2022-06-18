import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthenMiddleware implements NestMiddleware {
    constructor(
        private jwt: JwtService
    ){}
    use(req: Request, res: Response, next: (error?: any) => void) {
        
        console.log('Nghi Token',req.cookies)
    try {
        let token = this.getToken(req.cookies['accessToken']);
        // console.log(`Token Nghi: ${toe}`);
        
        if(token) {
            let user = this.jwt.verify(token,{
                secret: process.env.JWT_SECRET
            })
            
            req.user = user._doc
            next()
        }        
        
    } catch (error) {
        res.status(401).send("Unauthorization")   
    }
    }

    getToken(tokenHeader:string) {
        let token = tokenHeader.split(' ')[1];
        return token
    }
    
}