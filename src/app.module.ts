import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

import { GraphQLModule } from '@nestjs/graphql';
import { GqlConfigService } from './graphql.config';
@Module({
  imports: [
    // Since graphql ooptions script need to be executed
    // everytime when schema changes to get updated schema
    // Passing it to app module will take care of the things

    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    PrismaModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
