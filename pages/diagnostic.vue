<template>
  <main>
    <h1>Diagnóstico online</h1>
    <form @submit.prevent="consultarProlog">
      <div class="radioGrid">
        <QuestionRadio
          v-for="(question, index) in symptoms"
          :key="question"
          :question-name="question.symptom"
          :id="(index + 1).toString()"
        />
      </div>
      <input type="submit" value="Enviar" />
    </form>
    <NuxtLink to="/">Regresar</NuxtLink>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
});

const consultarProlog = async (e: Event) => {
  const inputs = e.target as HTMLFormElement;
  const formData = new FormData(inputs);
  const formProps = Object.fromEntries(formData) as {
    [a: string]: string | number;
  };
  console.log(formProps);
  await $fetch("/api/consultaProlog", {
    method: "post",
    body: formProps,
  }).then((res) => {
    res.status && res.stdout ? navigate(res.stdout) : navigateTo("/result");
  });
};

const navigate = (val: string) => {
  navigateTo({
    path: "result",
    query: {
      disease: val,
    },
  });
};

const { data: symptoms } = await useFetch('/api/symtoms')

</script>

<style scoped>
a {
  background-color: #f1064a;
  color: white;
  padding: 8px 18px;
  border: 0;
  font-size: large;
  border-radius: 4px;
  margin: auto;
  text-decoration: none;
  margin: 20px;
  z-index: 1;
}
h1 {
  color: #06b396;
  z-index: 1;
}
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
input {
  background-color: #f1064a;
  color: white;
  padding: 8px 18px;
  border: 0;
  font-size: large;
  border-radius: 4px;
  margin: auto;
  
}
.radioGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 2rem;
  z-index: 1;
}
</style>
