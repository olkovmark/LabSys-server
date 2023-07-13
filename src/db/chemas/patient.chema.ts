import mongoose, { Schema } from 'mongoose';
import { Patient } from 'src/patients/patient.intrface';

export const patientChema = new mongoose.Schema<Patient>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDay: { type: String, required: true },
  gender: { type: String, required: true },
});
