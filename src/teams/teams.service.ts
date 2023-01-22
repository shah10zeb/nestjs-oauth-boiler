import { Injectable } from '@nestjs/common';
import { TeamImplementation } from 'src/client/db-client/postgres/teams/teams.implementation';

@Injectable()
export class TeamsService {
  constructor(private teamsImpl: TeamImplementation) {}

  async getAllTeams(): Promise<any> {
    const queryResponse= await this.teamsImpl.getAll();
     
      let resMap= this.groupTeamsByCompany(queryResponse);
      return Object.fromEntries(resMap)
  }

  async createTeam(teamData: any, company_id: string): Promise<any> {
      return this.teamsImpl.createTeam(this.createTeamBody(teamData,company_id))
  }
  private createTeamBody(teamData, company_id){
    return{
      ...teamData,
      company_id:company_id
    }
  }

  private groupTeamsByCompany(teams: any[]){
   let map=new Map<string, object[]>();
   for (let team of teams){
    if (map.has(team.company_id)){
      map.set(team.company_id,[...map.get(team.company_id), team])
    }else{
      map.set(team.company_id,[team])
    }
   }
   return map;
  }
}
