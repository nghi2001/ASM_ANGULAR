import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { Project } from 'src/project/schema/project.schema';
import { Employe } from 'src/employe/schema/employe.schema';

export type TaskDocument =  Task & Document;

@Schema()
export class Task{
    @Prop()
    tenTask: string

    @Prop()
    mota: string
    @Prop({type: mongoose.Types.ObjectId, ref:Project.name})
    duanID: Project
    @Prop({default:0})
    priority: number
    @Prop({type: mongoose.Types.ObjectId, ref:Employe.name})
    nhanvienID: Employe;
    @Prop({default: false})
    status: boolean

}

export const TaskSchema = SchemaFactory.createForClass(Task)