import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
  constructor() {}

  public async getCompanyById(id: string): Promise<any> {
    return 'IDD';
  }

  public async getCompanyByName(name: string): Promise<any> {
    return 'IDD';
  }

  public async createCompany(companyData: any): Promise<any> {
    return 'IDD';
  }
}
