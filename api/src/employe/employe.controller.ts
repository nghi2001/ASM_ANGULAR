import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import mongoose from 'mongoose';
import {diskStorage} from 'multer';
import { editFileName, imageFileFilter } from 'src/file';
import { EmployeService } from './employe.service';
import { Employe } from './schema/employe.schema';
import * as bcrypt from 'bcrypt';
@Controller('employe')
export class EmployeController {
    constructor(
        private EmployeService: EmployeService
    ){}

    @Post()    
    @UseInterceptors(FileInterceptor('image',{
        storage: diskStorage({
            destination: './public/image',
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }))
    async create(@Body() body, @UploadedFile() file: Express.Multer.File) {
        // console.log(file);
        // console.log(body.firstname);
        const filename = {
            originalname: file.originalname,
            filename: file.filename,
        };
        body.image = "public/image/"+filename.filename;
        let salt = bcrypt.genSaltSync(10);
        let hashpassword = bcrypt.hashSync(body.pass,salt);
        body.pass = hashpassword;
        let newEmploye = await this.EmployeService.create(body);
        console.log(newEmploye);
        
        return {data: newEmploye};
    }
    
    @Get("/findname/:name")
    async getByName(@Param("name") name) {
        console.log(3);
        
        let result = await this.EmployeService.findByName(name);
        return result
    }
    @Get(":id")
    async getById(@Param("id") id) {
        console.log(2);
        
        if(!mongoose.Types.ObjectId.isValid(id) || !id){
            return {}
        } else {        
            let employe = await this.EmployeService.findOne(id);
            return {data: employe};
        }
    }
    
    @Get()
    async getAll() {
        console.log(3);
        
        let employes = await this.EmployeService.getAll()
        return {data:employes};
    }
    @Put(":id")
    async update(@Param("id") id, @Body() body:Employe) {
        console.log(2);
        
        let updateEmploye = await this.EmployeService.update(id,body);
        return updateEmploye;
    }
    
    @Delete(":id")
    async delete(@Param("id") id) {
        let deleteEmploye = await this.EmployeService.delete(id);
        return {data: deleteEmploye};
    }
}
