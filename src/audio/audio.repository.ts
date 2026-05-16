import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioRepository {
  playMusic(): string {
    return "Lecture de la musique.";
  }
}