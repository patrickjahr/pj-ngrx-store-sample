import { Test } from '@nestjs/testing';
import { SpeakersService } from './speakers.service';

describe('SpeakersService', () => {
  let service: SpeakersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SpeakersService],
    }).compile();

    service = module.get(SpeakersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
