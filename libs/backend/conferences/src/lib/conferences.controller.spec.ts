import { Test } from '@nestjs/testing';
import { ConferencesController } from './conferences.controller';
import { ConferencesService } from './conferences.service';

describe('ConferencesController', () => {
  let controller: ConferencesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ConferencesService],
      controllers: [ConferencesController],
    }).compile();

    controller = module.get(ConferencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
