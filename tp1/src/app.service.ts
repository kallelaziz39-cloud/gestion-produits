import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
   getHealthTest(): string {
    return 'Health check passed!';
  }
}
