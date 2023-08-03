import mongoose from "mongoose"

const connection = async () =>{
    const config = useRuntimeConfig()
    try{
        await mongoose.connect(`mongodb+srv://2016200197:NltTkmzoOS9I9G7M@cluster0.kfavm3f.mongodb.net/SI`)
        console.log('Conectado a la DB')
    } catch (err) {
        console.error('Conexion fallida',err)
    }
}


export async function db() {
    if (mongoose.connection.readyState === 0) {
        await connection()
    }
    return mongoose
}