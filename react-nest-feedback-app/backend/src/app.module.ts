import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedBackModule } from './FeedBack/feedback.module';

@Module({
  imports: [FeedBackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
