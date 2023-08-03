<template>
    <div>
        <input 
            type="checkbox"
            :name="'s'+id"
            :id="'s'+id"
            :value="'s'+id"
        />
        <label :for="'s'+id">{{questionName}}</label>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    questionName:string,
    id: string
}>()

</script>

<style scoped>
div{
    display: flex;
    align-items: center;
    background-color: #22577A;
    padding: 8px 24px;
    border-radius: 6px;
    color: #C7F9CC;
}
input{
    height: 1.2rem;
    width: 1.2rem;
}
label{
    width: 100%;
    height: 100%;
}

</style>