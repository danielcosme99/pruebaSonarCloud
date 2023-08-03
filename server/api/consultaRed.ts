import { exec } from 'child-process-promise'

export default defineEventHandler(async (event)=>{

    const cmd = `cd python && py red.py`

    let output: string|undefined, status, final

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
        const xd = output.replaceAll('[','').replace(']]','').replaceAll(']',',').replaceAll('\r\n ','')
        const epic = xd.split(',')
        final = epic.map((e: string|number)=> Math.round(Number(e)))
    }

    return{
        stdout: final,
        status: status
    }
})