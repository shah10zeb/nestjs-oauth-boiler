import { Controller, Get, Req } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompanyController {
  constructor(private companiesService: CompaniesService) {}

  @Get('name/:name')
  getByName(): any {
    return 'This action returns one company by name';
  }

  @Get(':id')
  getById(): any {
    return 'This action returns one company by id';
  }

  @Post()
  create(@Body() request: any): any {
    return 'This action returns one company by creating it';
  }
}
