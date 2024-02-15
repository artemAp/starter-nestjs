import { Controller, Get } from '@nestjs/common';
import { RealIP } from 'nestjs-real-ip';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(@RealIP() ip: string): Promise<string> {
    return ip;
  }
}
