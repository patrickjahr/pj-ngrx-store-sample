import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConferencesModule } from '@lt/backend/conferences';
import { ContributionsModule } from '@lt/backend/contributions';
import { SpeakersModule } from '@lt/backend/speakers';

@Module({
  imports: [ConferencesModule, ContributionsModule, SpeakersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
