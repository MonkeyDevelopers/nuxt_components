<template>
   
   <h2>Formulários</h2>
   
   <button @click="rightFormStore.changeRightFormState()">Abrir Formulário</button>
   
   <forms-right-bg-form />
   <forms-right-form />
   
   
</template>

<script setup>

   const rightFormStore = useRightForm();
   


</script>