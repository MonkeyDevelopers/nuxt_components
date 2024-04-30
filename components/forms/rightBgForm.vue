<template>
   
   <Transition name="fade">
      <div class="form_bg" v-if="rightFormState"></div>
   </Transition>
   
</template>

<script setup>

   const rightFormStore = useRightForm();
   const {rightFormState} = storeToRefs(rightFormStore);
   
</script>

<style scoped>

   .form_bg {
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1;
      background: rgba(255, 255, 255, 0.213);
      backdrop-filter: blur(2px);
   }

</style>