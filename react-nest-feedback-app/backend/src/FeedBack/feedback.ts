import { Controller, Post, Body, Get } from '@nestjs/common';
import { FeedBackService } from './feedback.service';
import socket from 'socket.io';

@Controller()
export class FeedBackController {

  constructor(private readonly feedBackService: FeedBackService) {}
  @Post('/save')
  add(@Body('issue') issue, @Body('comment') comment) {
    const id = this.feedBackService.insertProblem(issue, comment);
    return { id };
  }

  @Get('/getlist')
  get() {
    return this.feedBackService.getProblems();
  }
}
