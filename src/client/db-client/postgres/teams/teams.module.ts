import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './teams.entity';
import { TeamImplementation } from './teams.implementation';

@Module({
    imports:[TypeOrmModule.forFeature([Team])],
    providers:[TeamImplementation],
    exports:[TeamImplementation]
})
export class TeamsImplementationModule {}
