import SintomaModel, { ISintoma } from "./models/sintomaModel";

export async function getAllSintomas(): Promise<ISintoma[]> {
  try {
    const sintomas: ISintoma[] = await SintomaModel.find().exec();
    return sintomas;
  } catch (error) {
    // Manejo de errores
    throw new Error("Error al obtener los síntomas");
  }
}

