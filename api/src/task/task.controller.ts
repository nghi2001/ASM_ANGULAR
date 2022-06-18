import { Controller, Get,Post,Put,Delete, Body, Param } from '@nestjs/common';
import { Task } from './schema/task.schema';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private TaskService: TaskService
    ){}
    @Get()
    async getAll() {
        let employes = await this.TaskService.getAll()
        return {data:employes};
    }

    @Get("/byproject/:id")
    async getTaskByProject(@Param("id") id) {
        let listTask = await this.TaskService.getByProject(id);
        
        return listTask;
    }

    @Post()
    async create(@Body() body: Task) {
        let newEmploye = await this.TaskService.create(body);

        return {newEmploye};
    }

    @Get(":id")
    async getById(@Param("id") id) {
        
        let employe = await this.TaskService.findOne(id);
        console.log(employe);
        
        return {data: employe};
    }
    @Put("updateState")
    async updateState(@Body() body) {
        body.status = !body.status
        console.log(body.status);
        let status = body.status
        console.log(status);
        
        let updateResult = await this.TaskService.updateStatus(body.id, status)
        console.log(updateResult);
        
        return {updateResult,status:201}
    }

    @Put(":id")
    async update(@Param("id") id, @Body() body:Task) {
        let updateEmploye = await this.TaskService.update(id,body);
        return updateEmploye;
    }
    
    @Delete(":id")
    async delete(@Param("id") id) {
        let deleteEmploye = await this.TaskService.delete(id);
        if(deleteEmploye != null)
            return {data: deleteEmploye};
        
        return null
    }
}
