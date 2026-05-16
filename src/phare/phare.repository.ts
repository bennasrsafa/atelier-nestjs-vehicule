import { Injectable } from '@nestjs/common';

@Injectable()
export class PhareRepository {
  turnOn(): string {
    return "Les phares éclairent la route.";
  }
}