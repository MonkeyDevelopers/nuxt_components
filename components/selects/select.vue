<template>
   
   <div class="select_component" @click="store.changeSelectState()">
      <h2>{{ optionSelect.name  ? optionSelect.name : 'Selecione uma Opção' }}</h2>
      <icon name="ph:caret-down-bold" class="select_icon" :class="selectState ? 'select_icon_rotate' : 'select_icon_rotate_deny'" />
   </div>
   <Transition name="select-show">
      <div class="select_options" v-if="selectState" ref="select_options" @click="store.changeSelectState()">
         <span @click="optionSelect = ''">Selecione uma Opção</span>
         <span
            v-for="option in values"
            :key="option.id"
            @click="optionSelect = option"
         >
            {{ option.name }}
         </span>
      </div>
   </Transition>
   
   
</template>

<script setup>


   const optionSelect = defineModel()

   const store = useSelectStore();
   const {selectState} = storeToRefs(store);
   const {selectedValue} = storeToRefs(store);
   const {values} = storeToRefs(store);
   
   // const select_options = ref(null);
   // onClickOutside(select_options, (event) => {
   //    if(selectState.value == true) {
   //       selectState.value = false;
   //    }
   // })
   

</script>

<style scoped>
   
   .content {
      width: 100%;
      padding: 50px;
   }

   .select_component {
      width: 300px;
      padding: 13px 15px;
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
      font-weight: 400;
   }
   
   .select_icon {
      font-size: 14px;
   }
   
   .select_component:hover {
      border: 1px solid #c3c3c3;
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.034);
   }
   
   /* options */
   
   .select_options {
      width: 300px;
      display: flex;
      flex-direction: column;
      padding: 3px;
      align-items: flex-start;
      row-gap: 3px;
      border-radius: 6px;
      border: 1px solid #f2f2f2;
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.024);
      background: white;
      position: absolute;
      z-index: 7;
      margin-top: 3px;
      transition: .3s;
   }
   
   .select_options span {
      padding: 10px 15px;
      font-size: 12px;
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
   
   /* transform */
   
   .select_icon_rotate {
      transform: rotate(-180deg);
      transition: .3s;
   }
   
   .select_icon_rotate_deny {
      transform: rotate(0deg);
      transition: .3s;
   }
   
   
   /* transitions */
   
   .select-show-enter-active {
      transition: all .3s;
   }
   
   .select-show-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   
   .select-show-enter-from,
   .select-show-leave-to {
      opacity: 0;
   }

</style>