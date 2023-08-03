import { Document, Schema } from "mongoose";
import { db } from "~~/server/db/connection";

// Define a Mongoose schema
export interface IEnfermedad extends Document {
  name: string;
  desc: string;
  url: string;
}

const EnfermedadSchema = new Schema<IEnfermedad>({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    url: {type	:String}
});

// Create a Mongoose model
const EnfermedadModel = (await db()).model<IEnfermedad>("enfermedades", EnfermedadSchema);
export default EnfermedadModel;