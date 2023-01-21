import { Body, Controller, Get, Post, UseGuards  } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamController {
  constructor(teamsService: TeamsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getById(): any {
    return 'This action returns all teams grouped by company';
  }

  @UseGuards(JwtAuthGuard)
  @Post('companies/:id')
  create(@Body() body: any): any {
    return 'This action returns one team for a company by creating it';
  }
}
