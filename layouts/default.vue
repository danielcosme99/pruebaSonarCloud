<template>
    <div>
        <slot/>
    </div>
</template>

<style scoped>
div{
    background-image: url('~/botmedico.png');
    height: 100vh;
    width: 100vw;
    background-size: cover;
    
}
div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.9; /* Ajusta la opacidad según tus necesidades */
}
</style>