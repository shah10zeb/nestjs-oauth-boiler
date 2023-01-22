import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.gaurd';
import { Role } from 'src/entities/roles.enum';
import { Roles } from 'src/helper/roles.decorator';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  @Roles(Role.READ_USER, Role.WRITE_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  getById(): any {
    return this.teamsService.getAllTeams();
  }

  @Post('companies/:company_id')
  @Roles(Role.WRITE_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() body: any, @Param() params: any): any {
    return this.teamsService.createTeam(body, params.company_id);
  }
}
