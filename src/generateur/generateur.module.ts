import { Module, Global } from '@nestjs/common'; // On importe Global
import { GenerateurService } from './generateur.service';
import { GenerateurRepository } from './generateur.repository';
import { MoteurModule } from '../moteur/moteur.module';

@Global() //Rend ce module et ses exports visibles dans TOUTE l'application ! 
@Module({
  imports: [MoteurModule],
  providers: [GenerateurService, GenerateurRepository],
  exports: [GenerateurService] // Rendu disponible globalement sans avoir à réimporter GenerateurModule 
})
export class GenerateurModule {}