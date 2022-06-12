import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { ProjectService } from './project.service';
import { Project } from './schema/project.schema';

@Controller('project')
export class ProjectController {
    constructor(
        private ProjectService : ProjectService
    ){}
    @Get()
    async index() {
        let projects = await this.ProjectService.getALl();

        return {data: projects};
    }

    @Get(":id")
    async findOne(@Param("id") id) {
        let Project = await this.ProjectService.findOne(id);
        
        return {data: Project};

    }

    @Post()
    async create(@Body() body: Project) {
        return this.ProjectService.create(body);
    }

    @Delete(":id")
    async delete(@Param("id") id) {
        return this.ProjectService.delete(id);
    }
    @Put('/addEmploye')
    async addEmploye(@Body("id") id,@Body("_id") _id){
        let result = await this.ProjectService.addEmploye(_id,id)
        return result
    }

    @Put(":id")
    async update(@Param('id') id, @Body() body:Project) {
        console.log(9);
        console.log(id);
        
        let update = await this.ProjectService.update(id, body);
        console.log(update);
        
        return true
    }
        
}
