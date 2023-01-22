import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies.entity';
import { CompanyImplementation } from './companies.implemetation';

@Module({
    imports:[TypeOrmModule.forFeature([Company])],
    providers:[CompanyImplementation],
    exports:[CompanyImplementation]
})
export class CompaniesImplementationModule {}
