import mongoose from 'mongoose';
import { Patient } from 'src/patients/patient.interface';

const contactChema = new mongoose.Schema({
  type: { type: Number, required: true },
  value: { type: String, required: true },
});

export const patientChema = new mongoose.Schema<Patient>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDay: { type: String, required: true },
  gender: { type: String, required: true },
  contacts: [contactChema],
});
