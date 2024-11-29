import { Injectable } from '@nestjs/common'
import { add } from '@parkify/sample-lib'
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Its the server' + add(2, 3)
  }
}
