import { Controller } from '@nestjs/common';
import { ConferencesService } from './conferences.service';

@Controller('conferences')
export class ConferencesController {
  constructor(private conferencesService: ConferencesService) {}
}
