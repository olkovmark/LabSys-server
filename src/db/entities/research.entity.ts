import { Research } from 'src/researches/research.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AnalysisEntity } from './analysis.entity';

@Entity('Researches')
export class ResearchEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => AnalysisEntity, { nullable: false })
  analysis: number;

  static from(research: Research) {
    const entity = new ResearchEntity();
    entity.name = research.name;
    entity.analysis = research.analysisID;
    return entity;
  }
}
