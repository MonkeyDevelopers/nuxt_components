<template>
   
   <Transition name="modal-show">
      <div class="modal_container" v-if="modalState">
         <div class="modal_item">
            <div class="modal_header">
               <h2>Titulo do Alerta</h2>
               <icon @click="modalStore.changeModalState()" name="ph:x-bold" class="modal_close_btn" />
            </div>
            <div class="modal_body">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aspernatur magni voluptatum aliquam culpa nesciunt, possimus nihil eos unde similique.</p>
            </div>
            <div class="modal_buttons">
               <button @click="modalStore.changeModalState()" class="modal_btn_deny">Cancelar</button>
               <button @click="modalStore.changeModalState()" class="modal_btn_confirm">Confirmar</button>
            </div>
         </div>
      </div>
   </Transition>
   
   <modals-bg-modal />
   
</template>

<script setup>

   const modalStore = useModalStore();
   const {modalState} = storeToRefs(modalStore);

</script>

<style scoped>

   .modal_container {
      width: 100%;
      height: 100vh;
      z-index: 5;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      transition: .3s;
   }
   
   .modal_item {
      width: 400px;
      background: white;
      box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
   }
   
   .modal_header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   
   .modal_header h2 {
      font-size: 18px;
      font-weight: 600;
      color: #000000;
   }
   
   .modal_close_btn {
      font-size: 25px;
      padding: 2px;
      border-radius: 3px;
      cursor: pointer;
      transition: .3s;
      color: #515151;
   }
   
   .modal_close_btn:hover {
      background: #f1f1f1;
   }
   
   .modal_body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
   
   .modal_body p {
      font-size: 13px;
      font-weight: 400;
      color: #575757;
   }
   
   .modal_buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 20px;
   }
   
   .modal_buttons button {
      width: 50%;
      height: 35px;
      border-radius: 6px;
      cursor: pointer;
      transition: .3s;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   
   .modal_btn_deny {
      background: #e5e5e5;
      font-weight: 400;
      color: #000000;
   }
   
   .modal_btn_deny:hover {
      background: #cacaca;
      color: #424242;
   }
   
   .modal_btn_confirm {
      background: #000000;
      font-weight: 400;
      color: #ffffff;
   }
   
   .modal_btn_confirm:hover {
      background: #343434;
   }
   
   
   
   
   
   
   
   
   
   /* transitions */
   
   .modal-show-enter-active .modal_item {
      transition: all .3s;
   }
   
   .modal-show-leave-active .modal_item {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   
   .modal-show-enter-from .modal_item,
   .modal-show-leave-to .modal_item {
      transform: scale(0.5);
      opacity: 0;
   }

</style>