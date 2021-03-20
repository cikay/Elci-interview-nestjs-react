import { Controller, Post, Body, Get, Logger } from '@nestjs/common';
import { FeedBackService } from './feedback.service';
import { AppGateway } from '../app.gateway';
import { SocketService } from '../socket/socket.service';
@Controller()
export class FeedBackController {
  private logger: Logger = new Logger('GateWay');
  constructor(
    private readonly feedBackService: FeedBackService,
    private readonly socketService: SocketService,
  ) {}

  @Post('/save')
  add(@Body('issue') issue, @Body('comment') comment) {
    const id = this.feedBackService.insertProblem(issue, comment);
    //error in here that is because SocketService does not have server
    this.socketService.socket.emit('receive-postedFeedback', {
      message: 'muzaffer',
    });
    // this.socketService.server.emit('receive-postedFeedback', {
    //   message: 'Hello from REST API',
    // });
    this.logger.log('issue', issue);
    this.logger.log('comment', comment);
    this.logger.log(this.socketService.socket);
    // this.logger.log(this.appGateway.server);
    return { id };
  }

  @Get('/getlist')
  get() {
    return this.feedBackService.getProblems();
  }
}
