<template>
   
   <Transition name="slide-fade">
      <div class="form" v-if="rightFormState">
         <h2>FORMULARIO DA DIREITA</h2>
         <button @click="rightFormStore.changeRightFormState()">Fechar Formulario</button>
      </div>
   </Transition>
   
</template>

<script setup>

   const rightFormStore = useRightForm();
   const {rightFormState} = storeToRefs(rightFormStore);
   
</script>

<style scoped>

   .form {
      width: 400px;
      height: 100vh;
      position: fixed;
      z-index: 2;
      top: 0;
      right: 0;
      padding: 20px;
      background: white;
      box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
   }

</style>