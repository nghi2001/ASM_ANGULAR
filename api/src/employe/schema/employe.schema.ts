import {Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type EmployeDocument = Document&Employe;

@Schema()
export class Employe {
    @Prop()
    lastname: string;
    
    @Prop()
    firstname: string;

    @Prop()
    birthday: string;
    @Prop({default: 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg'})
    image: string;
    @Prop()
    sex: boolean

    @Prop()
    khuvuc: string
}

export const EmployeSchema = SchemaFactory.createForClass(Employe);