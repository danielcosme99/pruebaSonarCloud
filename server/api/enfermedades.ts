import EnfermedadModel from "~~/server/db/models/enfermedadesModel";
export default defineEventHandler(async () => {
  try {
    const result = await EnfermedadModel.find().exec();
    // const enfermedades = [
    //     {
    //       name: "Tuberculosis",
    //       desc: "La tuberculosis es una enfermedad infecciosa causada por la bacteria Mycobacterium tuberculosis. Los síntomas pueden incluir tos persistente que dura más de tres semanas, dificultad para respirar o dolor en el pecho, fiebre, sudoración nocturna y pérdida de peso.",
    //     },
    //     {
    //       name: "Neumonía",
    //       desc: "La neumonía es una inflamación de los pulmones causada por una infección bacteriana o viral. Los síntomas pueden incluir tos con flema, dificultad para respirar, dolor en el pecho, fiebre alta y escalofríos.",
    //     },
    //     {
    //       name: "Bronquitis",
    //       desc: "La bronquitis es una inflamación de los bronquios (los tubos que llevan aire a los pulmones) causada por una infección bacteriana o viral. Los síntomas pueden incluir tos con flema, dificultad para respirar, dolor en el pecho y fiebre baja.",
    //     },
    //     {
    //       name: "Enfisema",
    //       desc: "El enfisema es una enfermedad pulmonar crónica en la que se dañan los sacos de aire en los pulmones, lo que dificulta la capacidad del cuerpo para absorber oxígeno. Los síntomas pueden incluir tos crónica, dificultad para respirar, dolor en el pecho, fatiga y pérdida de peso.",
    //     },
    //     {
    //       name: "Neumotórax",
    //       desc: "El neumotórax es una acumulación de aire en el espacio entre la pleura (la capa que cubre los pulmones) y el tórax (la caja torácica). Los síntomas pueden incluir dificultad para respirar, dolor en el pecho, fatiga, tos y dolor abdominal.",
    //     },
    //     {
    //       name: "Pleuritis",
    //       desc: "La pleuritis es una inflamación de la pleura (la capa que cubre los pulmones) causada por una infección o una lesión. Los síntomas pueden incluir dolor en el pecho que se agrava al respirar profundamente, tos, fiebre y sudoración.",
    //     },
    //   ];
      
    //   for (let i = 0; i < enfermedades.length; i++) {
    //     const enfermedad = enfermedades[i];
    //     await EnfermedadModel.create({
    //       name: enfermedad.name,
    //       desc: enfermedad.desc
    //     });
    //     console.log(`Enfermedad "${enfermedad.name}" agregada a la base de datos.`);
    //   }
    // const enfermedades = [
    //     {
    //       name: "Anemia",
    //       desc: "La anemia es una condición en la cual el cuerpo no tiene suficientes glóbulos rojos sanos para transportar oxígeno de manera adecuada a los tejidos. Esto puede causar fatiga, debilidad, palidez y otros síntomas.",
    //     },
    //     {
    //       name: "Diabetes",
    //       desc: "La diabetes es una enfermedad crónica que se caracteriza por niveles elevados de azúcar en la sangre. Esto puede ocurrir debido a la falta de producción de insulina (diabetes tipo 1) o a la incapacidad del cuerpo para utilizarla correctamente (diabetes tipo 2). Los síntomas incluyen sed excesiva, necesidad frecuente de orinar, fatiga, pérdida de peso y visión borrosa.",
    //     },
    //     {
    //       name: "Dengue",
    //       desc: "El dengue es una enfermedad viral transmitida por mosquitos, común en áreas tropicales y subtropicales. Los síntomas pueden incluir fiebre alta, dolor de cabeza, dolor muscular y articular, erupción cutánea y fatiga. En algunos casos, el dengue puede volverse grave y provocar sangrado, dificultad respiratoria y disfunción orgánica.",
    //     },
    //     {
    //       name: "Dengue grave",
    //       desc: "El dengue grave es una forma más severa de la enfermedad y puede poner en peligro la vida del paciente. Se caracteriza por síntomas como hemorragias graves, disfunción de órganos, disminución de plaquetas y aumento del riesgo de shock. Requiere atención médica urgente y hospitalización.",
    //     }
    // ];
    // for (let i = 0; i < enfermedades.length; i++) {
    //         const enfermedad = enfermedades[i];
    //         await EnfermedadModel.create({
    //           name: enfermedad.name,
    //           desc: enfermedad.desc
    //         });
    //         console.log(`Enfermedad "${enfermedad.name}" agregada a la base de datos.`);
    //       }
    return result;
  } catch (error) {
    console.error(error);
  }
});
