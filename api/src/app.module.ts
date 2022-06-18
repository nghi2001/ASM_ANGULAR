import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { EmployeModule } from './employe/employe.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StreamfileModule } from './streamfile/streamfile.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenMiddleware } from './middleware/Authen.middleware';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [ProjectModule, TaskModule, EmployeModule,
    MongooseModule.forRoot('mongodb://localhost:27017/asm'),
    StreamfileModule,
    ConfigModule.forRoot(),
    AuthModule,
    JwtModule.register({}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenMiddleware)
      .forRoutes('auth/verify')
  }
}
