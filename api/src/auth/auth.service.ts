import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employe, EmployeDocument } from 'src/employe/schema/employe.schema';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @InjectModel(Employe.name) private EmployeModel : Model<EmployeDocument>
    ){}

    async getAll():Promise<any> {
        return this.EmployeModel.find({})
    }

    async findByEmail(email:string):Promise<any> {
        return this.EmployeModel.findOne({email: email})
    }
    getnerateToken(userinfor):string {
        let token = this.jwtService.sign(userinfor,{
            secret: process.env.JWT_SECRET,
            expiresIn: '10m'
        })
        return token
    }

    async verifyToken(name,pass, token) {
        try {
            let result = this.jwtService.verify(token)
        
            return result;
        } catch (error) {
            console.log(error);
            
        }
    }
}
