import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from '../teams/teams.entity';

// -- UUID (primary Key)

// -- Company name

// -- Company CEO

// -- Company address

// -- Inception date
@Entity()
export class Company {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  company_name: string;

  @Column('varchar')
  company_ceo: string;

  @Column('varchar')
  company_address: string;

  @Column('date')
  inception_date: Date;
}
