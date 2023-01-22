import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Company } from '../companies/companies.entity';

@Entity()
export class Team {
  @PrimaryColumn('uuid')
  id: string;

  @ManyToOne(() => Company, (Company) => Company.id, { cascade: true })
  @JoinColumn({ name: 'company_id' })
  company_id: string;

  @Column('varchar')
  team_lead_name: string;
}
