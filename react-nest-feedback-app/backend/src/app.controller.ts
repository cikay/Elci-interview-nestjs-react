import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appGateWay: AppGateway,
  ) {}

  @Get()
  getHello(): string {
    this.appGateWay.server.emit('receive-postedFeedback', {
      message: 'Hello from REST API',
    });
    return this.appService.getHello();
  }
}
