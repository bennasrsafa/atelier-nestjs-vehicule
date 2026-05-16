import { Injectable } from '@nestjs/common';

@Injectable()
export class MoteurRepository {
  private estDemarre = false;

  start(): string {
    this.estDemarre = true;
    return "Le moteur vient de démarrer.";
  }

  getStatus(): boolean {
    return this.estDemarre;
  }
}