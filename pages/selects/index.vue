<template>
   
   
   {{ selectState }}
   {{ selectedValue }}
   <div class="content">
      <selects-select v-model="selectedValue" />
      <input type="text" placeholder="oieee">
   </div>
   
   
</template>

<script setup>

   const store = useSelectStore();
   const {selectState} = storeToRefs(store);
   const {selectedValue} = storeToRefs(store);

</script>


<style scoped>
   
   .content {
      width: 100%;
      padding: 50px;
   }

   .select_component {
      width: 300px;
      padding: 10px 15px;
      border-radius: 6px;
      border: 1px solid #e1e1e1;
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.024);
      cursor: pointer;
      transition: .3s;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   
   .select_component h2 {
      font-size: 13px;
      font-weight: 500;
   }
   
   .select_icon {
      font-size: 16px;
   }
   
   .select_component:hover {
      border: 1px solid #d7d7d7;
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.034);
   }
   
   /* options */
   
   .select_options {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 5px;
      border-radius: 6px;
      border: 1px solid #e1e1e1;
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.024);
      background: white;
      margin-top: 10px;
   }
   
   .select_options span {
      padding: 10px 15px;
      font-size: 11px;
      font-weight: 500;
      color: #000000;
      cursor: pointer;
      border-radius: 4px;
      transition: .3s;
      width: 100%;
   }
   
   .select_options span:hover {
      background: #f1f1f1;
   }
   
   

</style>