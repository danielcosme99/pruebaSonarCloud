import { exec } from 'child-process-promise'

export default defineEventHandler(async (event)=>{

    const cmd = `cd python && py arbol.py`

    let output: string|undefined,status, final

    await exec(cmd)
    .then(out=>{
        output=out.stdout
        status=true
    })
    .catch(err=>{
        output=err.stderr
        status=false
    })

    if(output && typeof output == 'string'){
        const xd = output.replace('[','').replace(']','').replaceAll('\r\n','')
        const arr = xd.split(' ')
        final = arr.map(e=>Number(e))
    }

    return{
        stdout: final,
        status: status
    }
})