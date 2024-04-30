<template>
   <h2>asuihduiasfasnbfasnkmf</h2>
   <button @click="alertStore.changeAlertState()">Mostrar Alerta</button>
   <alerts-simple-alert />
</template>

<script setup>

   const alertStore = useAlertStore();
   const {alertState} = storeToRefs(alertStore);

</script>