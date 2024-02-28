import { Controller, Get, Param } from '@nestjs/common';
import { ConferencesService } from './conferences.service';

@Controller('conferences')
export class ConferencesController {
  constructor(private conferencesService: ConferencesService) {}

  @Get('')
  getConferences() {
    return this.conferencesService.getAll();
  }

  @Get(':id')
  getConference(@Param() id: string) {
    return this.conferencesService.getItem(id);
  }
}
