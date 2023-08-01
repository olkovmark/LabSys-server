import mongoose, { Schema } from 'mongoose';

import { Research } from 'src/researches/research.interface';

export const researchChema = new mongoose.Schema<Research>({
  name: { type: String, required: true },
  analysisID: { type: Schema.Types.ObjectId, ref: 'analyses' },
});
