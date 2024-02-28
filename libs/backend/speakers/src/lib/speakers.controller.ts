import { Controller, Get, Param } from '@nestjs/common';
import { SpeakersService } from './speakers.service';

@Controller('speakers')
export class SpeakersController {
  constructor(private speakersService: SpeakersService) {}

  @Get('')
  getConferences() {
    return this.speakersService.getAll();
  }

  @Get(':id')
  getConference(@Param() id: string) {
    return this.speakersService.getItem(id);
  }
}
