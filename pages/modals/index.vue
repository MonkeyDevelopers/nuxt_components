<template>
   
   <h2>oi</h2>
   
   <button @click="modalStore.changeModalState()">Abrir Modal</button>
   
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <h1>TITULOOOOO</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <h1>TITULOOOOO</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <h1>TITULOOOOO</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias soluta cupiditate libero omnis odio in porro velit dolorem consequuntur numquam! Vero repellendus dignissimos sit unde aliquam dicta quibusdam earum?</p>
   <h1>TITULOOOOO</h1>
   
   <modals-modal />

   
</template>

<script setup>

   const modalStore = useModalStore();
   const {modalState} = storeToRefs(modalStore);

</script>

<style scoped>

   button {
      width: 100%;
      background: black;
      color: white;
      height: 100px;
   }

</style>