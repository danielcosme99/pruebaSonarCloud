import SintomaModel from "~~/server/db/models/sintomaModel";

export default defineEventHandler(async () => {
  try {
    const result = await SintomaModel.find().exec();
    // await SintomaModel.create({
    //   symptom: "asas",
    // })
    // const sintomas = [
    //   "Dolor en el pecho",
    //   "Fiebre alta",
    //   "Sudoración nocturna",
    //   "Cansancio extremo",
    //   "Perdida de apetito",
    //   "Perdida de peso",
    //   "Fiebre baja",
    //   "Fatiga",
    //   "Dolor de cabeza",
    //   "Escalofrios",
    //   "Dolor abdominal",
    //   "Tos mas de 3 meses",
    //   "Tos con flema",
    //   "Dificultad para respirar",
    //   "Sudoración",
    //   "Tos cronica",
    //   "Perdida de peso",
    //   "Dolor en las articulaciones",
    //   "Sensación de presión en el pecho",
    //   "Tos norma"
    // ];
    // for (let i = 0; i < sintomas.length; i++) {
    //   const sintoma = sintomas[i];
    //   await SintomaModel.create({ symptom: sintoma });
    //   console.log(`Síntoma "${sintoma}" agregado a la base de datos.`);
    // }
//     const sintomas = [
//       "dolor abdominal intenso",
//       "vomitos",
//       "respiración acelerada",
//       "hemorragias en las encías o la nariz",
//       "cansancio",
//       "agitacion",
//       "vision borrosa",
//       "orinar con mas frecuencia",
//       "perdida de peso involuntaria",
//       "agotamiento",
//       "mareos",
//       "vómitos o heces con sangre",
//       "somnolencia",
//       "sensacion de mucha sed",
//       "dificultad para respirar",
//       "fiebre elevada(40 °C)",
//       "dolor de cabeza intenso",
//       "dolor detrás de los ojos",
//       "dolor muscular y articular",
//       "nauseas",
//     ];
//  for (let i = 0; i < sintomas.length; i++) {
//       const sintoma = sintomas[i];
//       await SintomaModel.create({ symptom: sintoma });
//       console.log(`Síntoma "${sintoma}" agregado a la base de datos.`);
//     }
    return result;
  } catch (error) {
    console.error(error);
  }
});
