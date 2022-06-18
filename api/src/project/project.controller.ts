import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import mongoose from 'mongoose';
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
    @Get("/byname/:name")
    async getByName(@Param("name") name) {
        if(name == null || name == undefined) {
            return []
        }
        let projects = await this.ProjectService.getByName(name);
        console.log(projects);
        
        return projects;
    }
    @Get(":id")
    async findOne(@Param("id") id) {
        if(id == null || !mongoose.Types.ObjectId.isValid(id)) {
            return []
        }
        let Project = await this.ProjectService.findOne(id);
        
        return {data: Project};

    }

    @Post()
    async create(@Body() body: Project) {
        let project:any = await this.ProjectService.create(body);
        console.log(project);
        
        return project
    }

    @Delete(":id")
    async delete(@Param("id") id) {
        return this.ProjectService.delete(id);
    }
    @Put('/addEmploye')
    async addEmploye(@Body("id") id,@Body("_id") _id){
        console.log(id,_id);
        console.log(2);
        
        let result = await this.ProjectService.addEmploye(_id,id)
        console.log(result);
        
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
