import { Injectable } from '@nestjs/common';
import { FeedBack } from './feedback.model';
@Injectable()
export class FeedBackService {
  problems: FeedBack[] = [];

  insertProblem(issue: string, comment: string) {
    const date = new Date();
    const id = date.getTime();
    const problem = new FeedBack(id, issue, comment, date);
    this.problems.push(problem);
    return id;
  }

  getProblems() {
    return [...this.problems];
  }
}
