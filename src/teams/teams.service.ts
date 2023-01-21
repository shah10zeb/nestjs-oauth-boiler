import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  constructor() {}

  async getAllTeams(): Promise<any> {}

  async createTeam(teamData: any): Promise<any> {}
}
