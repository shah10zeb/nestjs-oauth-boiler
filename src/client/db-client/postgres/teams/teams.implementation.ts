import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './teams.entity';

@Injectable()
export class TeamImplementation {
  constructor(
    @InjectRepository(Team) private readonly repo: Repository<Team>,
  ) {}

  public async getAll() {
    return this.repo
      .createQueryBuilder('team')
      .select('*')
      .groupBy('team.company_id ,team.id')
      .getRawMany();
  }

  public async createTeam(teamData) {
    const newTeamData = this.repo.create(teamData);
    return this.repo.save(newTeamData);
  }
}
