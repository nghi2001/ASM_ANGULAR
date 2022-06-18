import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenMiddleware } from 'src/middleware/Authen.middleware';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project, ProjectSchema } from './schema/project.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:Project.name, schema: ProjectSchema}]),
        
    JwtModule.register({}),    
],
    controllers: [ProjectController],
    providers: [ProjectService]
})
export class ProjectModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthenMiddleware)
          .forRoutes('project')
      }
}
