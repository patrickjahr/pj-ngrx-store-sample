import { Controller, Get, Param } from '@nestjs/common';
import { ContributionsService } from './contributions.service';

@Controller('contributions')
export class ContributionsController {
  constructor(private contributionsService: ContributionsService) {}

  @Get('')
  getConferences() {
    return this.contributionsService.getAll();
  }

  @Get(':id')
  getConference(@Param() id: string) {
    return this.contributionsService.getItem(id);
  }
}
