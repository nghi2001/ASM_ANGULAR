import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('streamfile')
export class StreamfileController {
    @Get(":name")
    getFile(@Param('name') name): StreamableFile {
        const file = createReadStream(join(process.cwd(), '/public/'+name));
        return new StreamableFile(file);
    }
}
