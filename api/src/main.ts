import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: process.env.FE_DOMAIN,
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true
  })
  app.use('/public', express.static(join(__dirname, '..', 'public'))); // <-
  await app.listen(3000);
}
bootstrap();
