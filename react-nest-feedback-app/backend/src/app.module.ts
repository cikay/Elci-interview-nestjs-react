import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedBackModule } from './FeedBack/feedback.module';
import { AppGateway } from './app.gateway';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [FeedBackModule, SocketModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
