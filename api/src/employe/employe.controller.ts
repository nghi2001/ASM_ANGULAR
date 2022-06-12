import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { Employe } from './schema/employe.schema';

@Controller('employe')
export class EmployeController {
    constructor(
        private EmployeService: EmployeService
    ){}
    @Get()
    async getAll() {
        let employes = await this.EmployeService.getAll()
        return {data:employes};
    }

    @Post()
    async create(@Body() body: Employe) {
        let newEmploye = await this.EmployeService.create(body);

        return {data: newEmploye};
    }
    
    @Get("/findname/:name")
    async getByName(@Param("name") name) {
        let result = await this.EmployeService.findByName(name);
        return result
    }
    @Get(":id")
    async getById(@Param("id") id) {
        
        let employe = await this.EmployeService.findOne(id);
        return {data: employe};
    }
    @Put(":id")
    async update(@Param("id") id, @Body() body:Employe) {
        let updateEmploye = await this.EmployeService.update(id,body);
        return updateEmploye;
    }
    
    @Delete(":id")
    async delete(@Param("id") id) {
        let deleteEmploye = await this.EmployeService.delete(id);
        return {data: deleteEmploye};
    }
}
