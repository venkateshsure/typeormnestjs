import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  Hello(): string {
    return 'Hello!';
  }
}
