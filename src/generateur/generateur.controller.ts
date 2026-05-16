import { Controller, Get } from '@nestjs/common';
import { GenerateurService } from './generateur.service';

@Controller('generateur')
export class GenerateurController {
  constructor(private readonly generateurService: GenerateurService) {}

  @Get('produire')
  produire() {
    return { message: this.generateurService.produireEnergie() };
  }
}