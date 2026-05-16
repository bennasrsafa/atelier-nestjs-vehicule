import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { GenerateurRepository } from './generateur.repository';
import { MoteurService } from '../moteur/moteur.service';

@Injectable()
export class GenerateurService {
  constructor(
    private readonly generateurRepo: GenerateurRepository,
    private readonly moteurService: MoteurService // Injection du service Moteur
  ) {}

  produireEnergie(): string {
    if (!this.moteurService.verifierStatut()) {
      throw new HttpException("Impossible de générer de l'électricité : le moteur est éteint !", HttpStatus.BAD_REQUEST);
    }
    return this.generateurRepo.generatePower();
  }
}