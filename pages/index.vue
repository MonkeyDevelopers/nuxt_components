<template>
   <button @click="btnStore.changeButtonState()">Mostrar botão</button>
   <p v-if="buttonState">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ratione fugiat suscipit quae. Repellat sequi autem consequuntur voluptatem culpa blanditiis velit aspernatur laudantium illo alias eveniet eaque asperiores, nesciunt similique?</p>
</template>

<script setup>

   const btnStore = useButtonStore();
   const {buttonState} = storeToRefs(btnStore);
   const {changeButtonState} = storeToRefs(btnStore);

</script>

<style scoped>

   p {
      margin-bottom: 5000px;
   }
   
</style>