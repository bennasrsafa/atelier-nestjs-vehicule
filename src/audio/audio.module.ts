import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import { AudioRepository } from './audio.repository';
import { GenerateurModule } from '../generateur/generateur.module';

@Module({
  imports: [GenerateurModule],
  controllers: [AudioController],
  providers: [AudioService, AudioRepository],
  exports: [AudioService] // Exporté pour le véhicule
})
export class AudioModule {}