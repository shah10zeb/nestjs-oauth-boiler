import { Body, Controller, Get, Post, UseGuards  } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.gaurd';
import { Role } from 'src/entities/roles.enum';
import { Roles } from 'src/helper/roles.decorator';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamController {
  constructor(teamsService: TeamsService) {}

  @Get()
  @Roles(Role.READ_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  getById(): any {
    return 'This action returns all teams grouped by company';
  }

  @Post('companies/:id')
  @Roles(Role.READ_USER, Role.WRITE_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() body: any): any {
    return 'This action returns one team for a company by creating it';
  }
}
