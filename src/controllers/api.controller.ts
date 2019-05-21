import { Controller, Get, Req, Session } from '@nestjs/common';
import svgCaptcha = require('svg-captcha');
@Controller('api')
export class APIController {
    @Get('token')
    findToken(@Req() req: Request) {
        const captcha = svgCaptcha.create();
        // req.session.captcha = captcha.text;
        // app.use(session({ seccaptcharet: captcha.text }))
        // console.log(captcha);
        // return captcha;
    }
}
