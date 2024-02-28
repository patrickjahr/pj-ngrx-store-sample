import { Test } from '@nestjs/testing';
import { ContributionsService } from './contributions.service';

describe('ContributionsService', () => {
  let service: ContributionsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ContributionsService],
    }).compile();

    service = module.get(ContributionsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
