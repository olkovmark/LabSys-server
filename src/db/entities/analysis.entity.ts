import { Analysis } from 'src/analyses/analysis.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnalysisEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  static from(analysis: Analysis) {
    const analysisEntity = new AnalysisEntity();
    analysisEntity.name = analysis.name;
    return analysisEntity;
  }
}
