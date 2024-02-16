import { Controller, Get, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(@Ip() ip: string, @Req() req: any): Promise<string> {
    console.log('IP', req.ip)
    console.log('connection', req.connection.remoteAddress)
    return `${ip} ${req.connection.remoteAddress}`;
  }
}
