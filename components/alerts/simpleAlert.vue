<template>
   
   <Transition name="alert-show">
   
      <div class="alert" v-if="alertState">
         <div class="alert_img">
            <icon name="ph:checks" class="alert_icon" />
         </div>
         <div class="alert_body">
            <h2>Titulo do Alerta</h2>
            <p>Descrição do alerta para visualização.</p>
         </div>
      </div>
   
   </Transition>
   
</template>

<script setup>

   const alertStore = useAlertStore();
   const {alertState} = storeToRefs(alertStore);

</script>

<style scoped>

   .alert {
      width: 400px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 15px;
      padding: 15px;
      border-radius: 6px;
      background: white;
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.054);
      border: 1px solid #efefef;
      position: fixed;
      bottom: 20px;
      right: 20px;
   }
   
   .alert_img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      /* background: #30da6e1d; */
      border-radius: 6px;
   }
   
   .alert_icon {
      font-size: 25px;
      color: #000000;
   }

   .alert_body {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
   
   .alert_body h2 {
      font-size: 16px;
      font-weight: 500;
   }
   
   .alert_body p {
      font-size: 14px;
      font-weight: 400;
      color: #6e6e6e;
   }
   
   
   /* transitions */
   
   .alert-show-enter-active {
      transition: all .3s;
   }
   
   .alert-show-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   
   .alert-show-enter-from,
   .alert-show-leave-to {
      transform: translateY(100px);
      opacity: 0;
   }

</style>