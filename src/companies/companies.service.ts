import { Injectable } from '@nestjs/common';
import { CompanyImplementation } from 'src/client/db-client/postgres/companies/companies.implemetation';

@Injectable()
export class CompaniesService {
  constructor(private companyImp: CompanyImplementation) {}

  public async getCompanyById(id: string): Promise<any> {
    return this.companyImp.getById(id);
  }

  public async getCompanyByName(name: string): Promise<any> {
    return this.companyImp.getByName(name);
  }

  public async createCompany(companyData: any): Promise<any> {
    return this.companyImp.createCompany(companyData);
  }
}
