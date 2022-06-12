import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose, {Document} from 'mongoose';
import { Employe } from "src/employe/schema/employe.schema";

export type ProjectDocument = Project&Document;

@Schema()
export class Project {
    
    @Prop()
    name: string

    @Prop()
    startAt: Date

    @Prop()
    budget: number

    @Prop({type: mongoose.Types.ObjectId, ref: "Employe"})
    leader: Employe
    @Prop({default: true})
    state: boolean
    @Prop({type: [mongoose.Types.ObjectId], ref: "Employe"})
    teams: string[]
}


export const ProjectSchema = SchemaFactory.createForClass(Project);