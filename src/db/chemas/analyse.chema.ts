import mongoose from 'mongoose';
import { Analyse } from 'src/analyses/analys.interface';

export const analyseChema = new mongoose.Schema<Analyse>({
  name: {
    type: String,
    unique: true, // Указываем, что поле name должно быть уникальным
    required: true, // Можно также указать, что поле обязательно для заполнения
  },
  researchesList: [],
});
