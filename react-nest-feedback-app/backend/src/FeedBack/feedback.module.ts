import { Module } from '@nestjs/common';
import { FeedBackController } from './feedback';
import { FeedBackService } from './feedback.service';

@Module({
  controllers: [FeedBackController],
  providers: [FeedBackService],
})
export class FeedBackModule {}
