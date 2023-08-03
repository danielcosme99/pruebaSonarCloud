import { exec } from 'child-process-promise'

export default defineEventHandler(async (event)=>{

    const test = await readBody(event)

    const values = Object.values(test)

    const archivo = "diagnostico.pl"

    const cmd = `swipl -s ${archivo} -g "test([${values}])" -t halt`

    let output,status

    await exec(cmd)
    .then(out=>{
        output=out.stdout
        status=true
    })
    .catch(err=>{
        output=err.stderr
        status=false
    })

    console.log('Salida ', output)

    return{
        stdout: output,
        status: status
    }
})