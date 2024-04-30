<template>
   
   <Transition name="fade">
      <div class="modal_bg" v-if="modalState"></div>
   </Transition>
   
</template>

<script setup>

   const modalStore = useModalStore();
   const {modalState} = storeToRefs(modalStore);

</script>

<style scoped>

   .modal_bg {
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 4;
      background: rgba(255, 255, 255, 0.213);
      backdrop-filter: blur(3px);
      display: flex;
      justify-content: center;
   }

</style>