import { Controller } from '@nestjs/common';
import { SpeakersService } from './speakers.service';

@Controller('speakers')
export class SpeakersController {
  constructor(private speakersService: SpeakersService) {}
}
