import { Analysis } from 'src/analyses/analysis.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Analyses')
export class AnalysisEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  static from(analysis: Analysis) {
    const entity = new AnalysisEntity();
    entity.name = analysis.name;
    return entity;
  }
}
