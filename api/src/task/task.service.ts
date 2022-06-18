import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employe } from 'src/employe/schema/employe.schema';
import { Task, TaskDocument } from './schema/task.schema';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name) private TaskModel : Model<TaskDocument>
    ){}

    async getAll():Promise<Task[]> {

        return this.TaskModel.find({}).populate('EmployID');
    }

    async findOne(id) {
        console.log(id);
        
        return this.TaskModel.find({id:id}).populate("EmployID");
    }

    async create(task: Task){

        let newTask = new this.TaskModel();
            newTask.tenTask = task.tenTask;
            newTask.mota = task.mota;
            newTask.duanID = task.duanID;
            newTask.nhanvienID = task.nhanvienID;
            
        try {
            return newTask.save();
        } catch (error) {
            throw error
        }
    }
    updateStatus(id, status) {
        return this.TaskModel.updateOne({_id: id,status})
    }
    async update( id, task: Task) {
        let taskFind: Task = await this.TaskModel.findOneAndUpdate({_id:id},{
            task
        });
        return taskFind;

    }
    async delete(id) {
        return this.TaskModel.findOneAndDelete({id:id});
    }

    async getByProject(id): Promise<any> {
        return this.TaskModel.find({duanID: id});
    }
}
