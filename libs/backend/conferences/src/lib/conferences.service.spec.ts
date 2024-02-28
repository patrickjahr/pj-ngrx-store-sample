import { Test } from '@nestjs/testing';
import { ConferencesService } from './conferences.service';

describe('ConferencesService', () => {
  let service: ConferencesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ConferencesService],
    }).compile();

    service = module.get(ConferencesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
