import { Module } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { EmployeController } from './employe.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Employe, EmployeSchema } from './schema/employe.schema';
@Module({
  imports : [
    MongooseModule.forFeature([{name: Employe.name, schema: EmployeSchema}])
  ],
  providers: [EmployeService],
  controllers: [EmployeController]
})
export class EmployeModule {}
