import { Injectable } from '@nestjs/common';
import { VehiculeRepository } from './vehicule.repository';
import { MoteurService } from '../moteur/moteur.service';
import { PhareService } from '../phare/phare.service';
import { AudioService } from '../audio/audio.service';

@Injectable()
export class VehiculeService {
  constructor(
    private readonly vehiculeRepo: VehiculeRepository,
    private readonly moteurService: MoteurService,
    private readonly phareService: PhareService,
    private readonly audioService: AudioService
  ) {}

  orchestrerVehicule(): string[] {
    const journal: string[] = [];
    
    // 1. Démarrer le moteur
    journal.push(this.moteurService.demarrerMoteur());
    
    // 2. Allumer les phares
    journal.push(this.phareService.allumerPhare());
    
    // 3. Lancer la musique
    journal.push(this.audioService.lancerMusique());
    
    // 4. Statut final
    journal.push(this.vehiculeRepo.operate());
    
    return journal;
  }
}