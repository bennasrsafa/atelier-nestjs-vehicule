import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculeRepository {
  operate(): string {
    return "Système embarqué actif : Le véhicule est prêt et entièrement opérationnel !";
  }
}