import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TeamsImplementationModule } from 'src/client/db-client/postgres/teams/teams.module';

@Module({
  imports: [AuthModule, TeamsImplementationModule],
})
export class TeamsModule {}
