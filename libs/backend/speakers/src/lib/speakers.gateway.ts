import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: '*:*' })
export class SpeakersGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  readonly server: Server | undefined;

  handleConnection(client: Socket, ...args: unknown[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
