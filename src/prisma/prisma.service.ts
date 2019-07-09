import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';
import { endpoint as endPoint } from '../config';
@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: endPoint,
      debug: false,
    });
  }
}
