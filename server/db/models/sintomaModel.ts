import { Document, Schema } from "mongoose";
import { db } from "~~/server/db/connection";

// Define a Mongoose schema
export interface ISintoma extends Document {
  symptom: string;
}

const SintomaSchema = new Schema<ISintoma>({
  symptom: { type: String, required: true },
});

// Create a Mongoose model
const SintomaModel = (await db()).model<ISintoma>("sintoma", SintomaSchema);

export default SintomaModel;
