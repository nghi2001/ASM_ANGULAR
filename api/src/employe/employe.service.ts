import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employe, EmployeDocument } from './schema/employe.schema';

@Injectable()
export class EmployeService {
    constructor(
        @InjectModel(Employe.name) private EmployeModel : Model<EmployeDocument>
    ){}

    async getAll():Promise<Employe[]> {

        return this.EmployeModel.find({});
    }

    async findOne(id):Promise<Employe> {
        return this.EmployeModel.findOne({id: id});
    }

    async create(employe: Employe){

        let newEmploye = new this.EmployeModel();
        newEmploye.firstname = employe.firstname;
        newEmploye.lastname = employe.lastname;
        newEmploye.birthday = employe.birthday;
        newEmploye.sex = employe.sex;
        newEmploye.pass = employe.pass;
        newEmploye.email = employe.email;
        newEmploye.khuvuc = employe.khuvuc;
        newEmploye.image = employe.image
        try {
            return newEmploye.save();
        } catch (error) {
            throw error
        }
    }

    async update( id, employe: Employe) {
        let employeFInd: Employe = await this.EmployeModel.findOneAndUpdate({id:id},{
            firstname : employe.firstname,
            lastname : employe.lastname,
            birthday : employe.birthday,
            sex : employe.sex,
            khuvuc : employe.khuvuc
        });
        return employeFInd;

    }
    async delete(id) {
        return this.EmployeModel.findOneAndDelete({id:id});
    }

    async findByName(name) {
        return this.EmployeModel.find().or([{firstname: {$regex: '.*'+name+'.*',$options:'i'}},{lastname: {$regex:'.*'+name+".*",$options:'i'}}]);
    }
}
