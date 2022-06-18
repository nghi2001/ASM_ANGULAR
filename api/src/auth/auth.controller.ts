import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response,Request } from 'express';
import * as bcrypt from 'bcrypt';
@Controller('auth')
export class AuthController {

    constructor(
        private AuthService: AuthService
    ){}

    @Post('/logout')
    async logout(@Res() res:Response) {
        res.clearCookie('accessToken');
        res.status(200);
        return res.json('success')
    }
    @Post('/login')
    async login(@Body() body, @Res() res:Response) {
        let username = body.email;
        let pass:string = body.pass;
        console.log(288);
        
        let user:any = await this.AuthService.findByEmail(body.email);
        if( !user ) {
            return res.status(401).send("fail")
        }
        let compare = bcrypt.compareSync(String(pass),String(user.pass))
        console.log(compare);
        if(!compare) {
            return res.status(401).send("fail")  
        }
        if(compare) {
            let {pass,...userinfor} = user;
            console.log(userinfor);
            let token = this.AuthService.getnerateToken(userinfor);
            token = 'Bearer '+token;
            console.log(token);
            res.clearCookie('accessToken');
            res.cookie('accessToken',token.toString(),{
                httpOnly: true
            })
            return res.status(200).json({message:'success',status:true})
        }
    }

    @Get('/verify')
    async verify(@Body() body,@Req() req) {
        console.log(req.user);
        
        return req.user   
    }
}
