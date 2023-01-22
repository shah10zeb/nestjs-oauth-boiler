import { Module } from '@nestjs/common';
import { CompanyImplementation } from 'src/client/db-client/postgres/companies/companies.implemetation';
import { CompaniesImplementationModule } from 'src/client/db-client/postgres/companies/companies.module';

@Module({
  imports: [CompaniesImplementationModule],
})
export class CompaniesModule {}
