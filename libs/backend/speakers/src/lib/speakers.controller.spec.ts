import { Test } from '@nestjs/testing';
import { SpeakersController } from './speakers.controller';
import { SpeakersService } from './speakers.service';

describe('SpeakersController', () => {
  let controller: SpeakersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SpeakersService],
      controllers: [SpeakersController],
    }).compile();

    controller = module.get(SpeakersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
