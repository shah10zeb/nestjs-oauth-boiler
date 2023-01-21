import { Controller, Get, Req } from '@nestjs/common';
import { Body, Post, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.gaurd';
import { Role } from 'src/entities/roles.enum';
import { Roles } from 'src/helper/roles.decorator';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompanyController {
  constructor(private companiesService: CompaniesService) {}

  @Get('name/:name')
  @Roles(Role.READ_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  getByName(): any {
    return 'This action returns one company by name';
  }

  @Get(':id')
  @Roles(Role.READ_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  getById(): any {
    return 'This action returns one company by id';
  }

  @Post()
  @Roles(Role.READ_USER, Role.WRITE_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() request: any): any {
    return 'This action returns one company by creating it';
  }
}
