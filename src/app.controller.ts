import { Controller, Get, Headers, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(@Ip() ip: string, @Req() req: any, @Headers() headers: any): Promise<string> {
    console.log('IP', req.ip)
    console.log('connection', req.connection.remoteAddress)
    console.log('headers', headers.host)
    return `${ip} ${req.connection.remoteAddress}`;
  }
}
