import { Test } from '@nestjs/testing';
import { ContributionsController } from './contributions.controller';
import { ContributionsService } from './contributions.service';

describe('ContributionsController', () => {
  let controller: ContributionsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ContributionsService],
      controllers: [ContributionsController],
    }).compile();

    controller = module.get(ContributionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
