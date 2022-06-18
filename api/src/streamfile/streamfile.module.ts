import { Module } from '@nestjs/common';
import { StreamfileController } from './streamfile.controller';

@Module({
  controllers: [StreamfileController]
})
export class StreamfileModule {}
