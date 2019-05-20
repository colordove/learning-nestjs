import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class APIController {
    @Get('token')
    findToken() {
        return `I'm a token!`;
    }
}
