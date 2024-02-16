import { Controller, Get, Headers, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(@RealIP() ip: string, @Req() req: any, @Headers() headers: any): Promise<string> {
    console.log('IP', req.ip)
    console.log('connection', req.connection.remoteAddress)
    console.log('headers', headers.host)
    return `${ip} ${req.headers['x-forwarded-for']}`;
  }
}
