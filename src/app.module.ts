import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './companies/companies.controller';
import { TeamController } from './teams/teams.controller';
import { CompaniesService } from './companies/companies.service';
import { TeamsService } from './teams/teams.service';
import { TeamsModule } from './teams/teams.module';
import { CompaniesModule } from './companies/companies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { ClientModule } from './client/client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TeamsModule,
    CompaniesModule,
    AuthModule,
    UsersModule,
    ClientModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController, CompanyController, TeamController],
  providers: [AppService, CompaniesService, TeamsService],
})
export class AppModule {}
