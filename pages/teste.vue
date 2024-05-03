<template>
   
   <button @click="state = !state">clique aqui</button>
   
   <div class="pai">
      <Transition name="blablabla">
         <div class="teste1" v-if="state"></div>
      </Transition>
      <div class="teste2"></div>
   </div>
   
</template>

<script setup>

   const state = ref(true);

</script>

<style scoped>

   .pai {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
   }

   .teste1 {
      width: 500px;
      height: 200px;
      background: red;
   }
   
   .teste2 {
      flex: 1;
      height: 200px;
      background: blue;
   }

   
   /* transitions */
   
   .blablabla-enter-active {
      transition: all .3s;
   }
   
   .blablabla-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   
   .blablabla-enter-from,
   .blablabla-leave-to {
      margin-left: -500px;
      opacity: 0;
   }

</style>