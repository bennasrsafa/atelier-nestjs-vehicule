import { Controller, Get } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';

@Controller('vehicule')
export class VehiculeController {
  constructor(private readonly vehiculeService: VehiculeService) {}

  @Get('demarrer-tout')
  demarrerTout() {
    return {
      action: "Démarrage complet du véhicule",
      etapes: this.vehiculeService.orchestrerVehicule()
    };
  }
}