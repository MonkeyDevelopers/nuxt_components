<template>
   <h2>asuihduiasfasnbfasnkmf</h2>
   <button @click="alertStore.changeAlertState()">Mostrar Alerta</button>
   <alerts-simple-alert />
   <select name="" id="">
      <option value="" selected>oiiii</option>
      <option value="1">oiiii</option>
      <option value="1">oiiii</option>
      <option value="1">oiiii</option>
      <option value="1">oiiii</option>
   </select>
</template>

<script setup>

   const alertStore = useAlertStore();
   const {alertState} = storeToRefs(alertStore);

</script>