import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AnalysisEntity } from './analysis.entity';
import { PatientEntity } from './patient.entity';
import { PatientAnalysis } from 'src/patient-analyses/patient-analysis.interface';

@Entity('Patient-analyses')
export class PatientAnalysisEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @ManyToOne(() => AnalysisEntity, { nullable: false })
  analysis: number;

  @ManyToOne(() => PatientEntity, { nullable: false })
  patient: number;

  static from(req: PatientAnalysis) {
    const entity = new PatientAnalysisEntity();
    entity.analysis = req.analysisID;
    entity.patient = req.patientID;
    entity.date = req.date;
    return {
      ...new PatientAnalysisEntity(),
      analysis: req.analysisID,
      patient: req.patientID,
      date: req.date,
    };
  }
}
