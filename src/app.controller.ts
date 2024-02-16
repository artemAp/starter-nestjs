import { Controller, Get } from '@nestjs/common';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {

  @Get()
  async getHello(@RealIP() ip: string): Promise<string> {
    return `Your IP Address is ${ip}`;
  }
}
