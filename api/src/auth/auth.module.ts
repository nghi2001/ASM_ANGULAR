import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EmployeService } from 'src/employe/employe.service';
import { AuthenMiddleware } from 'src/middleware/Authen.middleware';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Employe, EmployeSchema } from 'src/employe/schema/employe.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[
    JwtModule.register({}),
    MongooseModule.forFeature([{name: Employe.name, schema: EmployeSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenMiddleware)
      .forRoutes('auth/verify')
  }
}
