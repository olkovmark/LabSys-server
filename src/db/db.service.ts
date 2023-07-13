import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';
import { patientChema } from './chemas/patient.chema';
import { error } from 'console';

@Injectable()
export class dbService {
  PatientModel = mongoose.model('Patients', patientChema);
  constructor(private configService: ConfigService) {
    this.connect();
  }
  async connect() {
    await mongoose.connect(this.configService.get('DATABASE'));
    console.log('MongoConnect');
  }

  async post(obj: object) {
    const patient = new this.PatientModel(obj);
    const res = await patient.save();
    return res;
  }

  async get() {
    return await this.PatientModel.find();
  }
}

const Mark = {
  firstName: 'Mark',
  lastName: 'Olkov',
};
