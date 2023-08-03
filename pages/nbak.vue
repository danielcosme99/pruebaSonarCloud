<template>
    <main>
        <h1>Comparativo: Árbol vs Red</h1>
        <button @click="makeRequests">Empezar</button>
        <table>
            <thead>
                <tr>
                    <th class="no"></th>
                    <th>Árbol</th>
                    <th>Red</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiempo</td>
                    <td>{{ counterArbol }}00ms</td>
                    <td>{{ counterRed }}00ms</td>
                </tr>
                <tr>
                    <td>Valor</td>
                    <td>{{ valArbol }}</td>
                    <td>{{ valRed }}</td>
                </tr>
                <tr>
                    <td colspan="3">Igualdad: {{ igualdad }}</td>
                </tr>
            </tbody>
        </table>
        <NuxtLink to="/">Regresar</NuxtLink>
    </main>
</template>

<script setup lang="ts">

    definePageMeta({
        pageTransition: {
            name: 'slide-right',
            mode: 'out-in'
        },
    })

    const counterArbol = ref(0)
    const counterRed = ref(0)

    const timerArbol = ref()
    const timerRed = ref()

    const igualdad = ref('')

    const valArbol = ref()
    const valRed = ref()

    const controller = ref(new AbortController())

    const clearAllData = () =>{
        clearInterval(timerArbol.value)
        clearInterval(timerRed.value)
        controller.value.abort()
        controller.value = new AbortController()
        counterRed.value = 0
        counterArbol.value = 0
        valArbol.value=null
        valRed.value=null
        igualdad.value=''
    }

    const makeRequests = async () =>{
        
        clearAllData()

        const [arbol,red] = await Promise.all([consultarArbol(), consultarRed()])

        if(arbol?.toString()===red?.toString()) igualdad.value='100%'
        else igualdad.value = 'No son completamente iguales'

        valArbol.value = arbol?.toString()
        valRed.value = red?.toString()
    }

    const consultarArbol = async () =>{    
        timerArbol.value = setInterval(()=>{
            counterArbol.value++
        },100)
        const { status, stdout } = await $fetch('/api/consultaArbol',{
            signal: controller.value.signal
        })

        clearInterval(timerArbol.value)
        
        return stdout
    }

    const consultarRed = async () =>{      
        timerRed.value = setInterval(()=>{
            counterRed.value++
        },100)
        const { status, stdout } = await $fetch('/api/consultaRed',{
            signal: controller.value.signal
        })
        
        clearInterval(timerRed.value)

        return stdout
    }

</script>

<style scoped>
table{
    border-collapse: collapse;
    max-width: 800px;
}
table td, th{
    border: 1px solid gray;
    padding: 1rem 1.2rem;
    overflow: auto;
    max-width: 400px;
}
.no{
    border: 0;
}
h1{
    color: #06b396;
}
main{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
input{
    background-color: #F1064A;
    color: white;
    padding: 8px 18px;
    border: 0;
    font-size: large;
    border-radius: 4px;
    margin: auto;
}
.radioGrid{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
    margin-bottom: 1rem;
}
form{
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 2rem;
}
button, a{
    background-color: #F1064A;
    color: white;
    padding: 8px 18px;
    border: 0;
    font-size: large;
    border-radius: 4px;
    margin: auto;
    text-decoration: none;
    margin: 20px;
}
</style>