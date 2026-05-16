import { Injectable } from '@nestjs/common';
import { MoteurRepository } from './moteur.repository';

@Injectable()
export class MoteurService {
  constructor(private readonly moteurRepo: MoteurRepository) {}

  demarrerMoteur(): string {
    return this.moteurRepo.start();
  }

  verifierStatut(): boolean {
    return this.moteurRepo.getStatus();
  }
}