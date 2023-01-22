import { Controller, Get, Request, Param } from '@nestjs/common';
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
  @Roles(Role.READ_USER, Role.WRITE_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getByName(@Param() params: any): Promise<any> {
    return await this.companiesService.getCompanyByName(params.name);
  }

  @Get(':id')
  @Roles(Role.READ_USER, Role.WRITE_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getById(@Param() params: any): Promise<any> {
    return this.companiesService.getCompanyById(params.id);
  }

  @Post()
  @Roles(Role.WRITE_USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() request: any): Promise<any> {
    return this.companiesService.createCompany(request);
  }
}
