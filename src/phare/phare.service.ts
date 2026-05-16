import { Injectable } from '@nestjs/common';
import { PhareRepository } from './phare.repository';
import { GenerateurService } from '../generateur/generateur.service';

@Injectable()
export class PhareService {
  constructor(
    private readonly phareRepo: PhareRepository,
    private readonly generateurService: GenerateurService
  ) {}

  allumerPhare(): string {
    // Valide d'abord si l'énergie est disponible (lèvera une erreur si le moteur est coupé)
    this.generateurService.produireEnergie(); 
    return this.phareRepo.turnOn();
  }
}