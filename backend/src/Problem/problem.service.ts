import { Injectable } from '@nestjs/common';
import { Problem } from './problem.model';
@Injectable()
export class ProblemService {
  problems: Problem[] = [];

  insertProblem(issue: string, comment: string) {
    const date = new Date();
    const id = date.getTime();
    const problem = new Problem(id, issue, comment, date);
    this.problems.push(problem);
    return id;
  }

  getProblems() {
    return [...this.problems];
  }
}
