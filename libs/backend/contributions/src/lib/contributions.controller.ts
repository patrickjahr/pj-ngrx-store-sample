import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { Contribution } from '@lt/shared/typescript/domain';

@Controller('contributions')
export class ContributionsController {
  constructor(private contributionsService: ContributionsService) {}

  @Get('')
  getConferences(): Contribution[] {
    return this.contributionsService.getAll();
  }

  @Get(':id')
  getConference(@Param('id') id: string): Contribution {
    return this.contributionsService.getItem(id);
  }

  @Put(':id')
  updateContribution(
    @Param('id') id: string,
    @Body() contribution: Contribution
  ): void {
    this.contributionsService.updateItem(id, contribution);
  }
}
