import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './companies.entity';

@Injectable()
export class CompanyImplementation {
  constructor(
    @InjectRepository(Company) private readonly repo: Repository<Company>,
  ) {}

  public async getAll() {
    return await this.repo.find();
  }

  public async getById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  public async getByName(name: string) {
    return this.repo.findOne({ where: { company_name: name } });
  }

  public async createCompany(companyData: any) {
    const newCompanyData = this.repo.create(companyData);
    return this.repo.save(newCompanyData);
  }
}
