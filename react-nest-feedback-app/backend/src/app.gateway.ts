import { Logger } from '@nestjs/common';
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SocketService } from './socket/socket.service';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private socketService: SocketService) {}
  @WebSocketServer() public server: Server;
  // @WebSocketClient() public client: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('receive-postedFeedback')
  handleEvent(@MessageBody() data: any) {
    return data;
  }

  afterInit(server: Server) {
    this.socketService.socket = server;
    console.log('socket', server);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
