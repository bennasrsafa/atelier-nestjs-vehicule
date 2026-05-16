import { Controller, Get } from '@nestjs/common';
import { MoteurService } from './moteur.service';

@Controller('moteur')
export class MoteurController {
  constructor(private readonly moteurService: MoteurService) {}

  @Get('demarrer')
  demarrer() {
    return { message: this.moteurService.demarrerMoteur() };
  }

  @Get('statut')
  statut() {
    return { actif: this.moteurService.verifierStatut() };
  }
}