import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResearchEntity } from './research.entity';
import { PatientAnalysisEntity } from './patient-analysis.entity';
import { ResearchResult } from 'src/research-results/research-result.interface';

@Entity('Research-results')
export class ResearchResultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  researchDate: Date;

  @Column({ nullable: true })
  description: Date;

  @ManyToOne((v) => ResearchEntity, { nullable: false })
  research: number;

  @ManyToOne((v) => PatientAnalysisEntity, { nullable: false })
  patientAnalysis: number;

  static from(req: ResearchResult) {
    const entity = new ResearchResultEntity();
    entity.research = req.researchID;
    entity.patientAnalysis = req.patientAnalysisID;
    return entity;
  }
}
