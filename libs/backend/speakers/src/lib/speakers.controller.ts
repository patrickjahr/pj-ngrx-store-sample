import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { SpeakersService } from './speakers.service';
import { Speaker } from '@lt/shared/typescript/domain';
import { SpeakersGateway } from './speakers.gateway';

@Controller('speakers')
export class SpeakersController {
  constructor(
    private speakersService: SpeakersService,
    private speakersGateway: SpeakersGateway
  ) {}

  @Get('')
  getConferences(): Speaker[] {
    return this.speakersService.getAll();
  }

  @Get(':id')
  getConference(@Param('id') id: string): Speaker {
    return this.speakersService.getItem(id);
  }

  @Put(':id')
  updateConference(@Param('id') id: string, @Body() speaker: Speaker): void {
    this.speakersService.updateItem(id, speaker);
  }

  @Delete(':id')
  deleteSpeaker(@Param('id') id: string): void {
    this.speakersService.deleteItem(id);
    this.speakersGateway.server?.emit('speakerDeleted', id);
  }
}
