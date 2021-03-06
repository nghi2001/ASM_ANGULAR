import { Injectable } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Project, ProjectDocument } from './schema/project.schema';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private ProjectModel : Model<ProjectDocument>
    ) {

    }

    async getALl() {
        return this.ProjectModel.find({}).populate(['leader','teams'])
    }

    async findOne(id) {
        if(mongoose.Types.ObjectId.isValid(id)){
            // console.log('tr');
            
            return this.ProjectModel.findOne({_id: id}).populate(['leader','teams'])
        
        }
        return []
    }

    async create(project: Project) {
        let today =  Date.now();
        let newProject = new this.ProjectModel();
        newProject.name = project.name;
        newProject.startAt = new Date(today);
        newProject.budget = project.budget;
        newProject.leader = project.leader;
        newProject.teams = project.teams;

        try {
            
            (await newProject.save()).populate(['leader','teams']);
            let p = await this.findOne(newProject._id)
            console.log(p);
            
            return p
        } catch (error) {
            throw error
        }
    }
    async delete(id) {
        if(mongoose.Types.ObjectId.isValid(id))
            return this.ProjectModel.findOneAndRemove({id:id});
        
        return false
    }

    async update(id,project) {
        return this.ProjectModel.findOneAndUpdate({_id:id}, project)
    }

    async addEmploye(_id,id:string) {
        return this.ProjectModel.updateOne({_id:_id}, {$push: {teams: new mongoose.Types.ObjectId(id)}});
    }

    async getByName(name:string) {
        return this.ProjectModel.find().or([{name: {$regex: '.*'+name+'.*',$options:'i'}}]);
    }
}
