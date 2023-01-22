import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsImplementationModule } from './teams/teams.module';
import { CompaniesImplementationModule } from './companies/companies.module';
import { Team } from './teams/teams.entity';
import { Company } from './companies/companies.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Team, Company],
        // TODO: PREFER MIGRATION RATHER THAN SYNC: TRUE
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TeamsImplementationModule,
    CompaniesImplementationModule,
  ],
  controllers: [],
  providers: [],
  exports: [TeamsImplementationModule, CompaniesImplementationModule],
})
export class PostgresModule {}
