import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProblemService } from './problem.service';
@Controller()
export class ProblemController {
  /**
   *
   */
  constructor(private readonly problemService: ProblemService) {}
  @Post('/save')
  add(@Body('issue') issue, @Body('comment') comment) {
    const id = this.problemService.insertProblem(issue, comment);
    return { id };
  }

  @Get('/getlist')
  get() {
    return this.problemService.getProblems();
  }
}
