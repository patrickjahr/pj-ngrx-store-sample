import { Controller, Get, Param } from '@nestjs/common';
import { SpeakersService } from './speakers.service';
import { Speaker } from '@lt/shared/typescript/domain';

@Controller('speakers')
export class SpeakersController {
  constructor(private speakersService: SpeakersService) {}

  @Get('')
  getConferences(): Speaker[] {
    return this.speakersService.getAll();
  }

  @Get(':id')
  getConference(@Param('id') id: string): Speaker {
    return this.speakersService.getItem(id);
  }
}
