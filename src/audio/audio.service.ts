import { Injectable } from '@nestjs/common';
import { AudioRepository } from './audio.repository';
import { GenerateurService } from '../generateur/generateur.service';

@Injectable()
export class AudioService {
  constructor(
    private readonly audioRepo: AudioRepository,
    private readonly generateurService: GenerateurService
  ) {}

  lancerMusique(): string {
    this.generateurService.produireEnergie();
    return this.audioRepo.playMusic();
  }
}