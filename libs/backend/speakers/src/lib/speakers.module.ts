import { Module } from '@nestjs/common';
import { SpeakersController } from './speakers.controller';
import { SpeakersService } from './speakers.service';
import { SpeakersGateway } from './speakers.gateway';

@Module({
  controllers: [SpeakersController],
  providers: [SpeakersService, SpeakersGateway],
  exports: [SpeakersService],
})
export class SpeakersModule {}
