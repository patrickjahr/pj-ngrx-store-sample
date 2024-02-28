import { Controller } from '@nestjs/common';
import { ContributionsService } from './contributions.service';

@Controller('contributions')
export class ContributionsController {
  constructor(private contributionsService: ContributionsService) {}
}
