import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ConferencesService } from './conferences.service';
import { Conference } from '@lt/shared/typescript/domain';

@Controller('conferences')
export class ConferencesController {
  constructor(private conferencesService: ConferencesService) {}

  @Get('')
  getConferences(): Conference[] {
    return this.conferencesService.getAll();
  }

  @Get(':id')
  getConference(@Param('id') id: string): Conference {
    return this.conferencesService.getItem(id);
  }

  @Put(':id')
  updateConference(
    @Param('id') id: string,
    @Body() conference: Conference
  ): void {
    this.conferencesService.updateItem(id, conference);
  }
}
