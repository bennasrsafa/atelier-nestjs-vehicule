import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeController } from './vehicule.controller';
import { VehiculeRepository } from './vehicule.repository';
import { MoteurModule } from '../moteur/moteur.module';
import { PhareModule } from '../phare/phare.module';
import { AudioModule } from '../audio/audio.module';

@Module({
  imports: [MoteurModule, PhareModule, AudioModule], // On importe tout ici pour l'orchestration
  controllers: [VehiculeController],
  providers: [VehiculeService, VehiculeRepository],
})
export class VehiculeModule {}