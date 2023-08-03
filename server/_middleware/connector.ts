import connection from "../db/connection"

export default defineEventHandler((event)=>{
    connection()

})