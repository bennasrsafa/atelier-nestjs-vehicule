import { Module } from '@nestjs/common';
import { PhareService } from './phare.service';
import { PhareController } from './phare.controller';
import { PhareRepository } from './phare.repository';
import { GenerateurModule } from '../generateur/generateur.module';

@Module({
  imports: [GenerateurModule],
  controllers: [PhareController],
  providers: [PhareService, PhareRepository],
  exports: [PhareService] // Exporté pour l'orchestration globale du véhicule
})
export class PhareModule {}