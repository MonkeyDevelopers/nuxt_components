export const useSelectStore = defineStore('select', {
   
   state() {
      return {
         selectState: false,
         selectedValue: 'asdasdasdasd',
         values: [
            {id: '1', name:'Opção 1'},
            {id: '2', name:'Opção 2'},
            {id: '3', name:'Opção 3'},
            {id: '4', name:'Opção 4'},
         ]
      }
   },
   
   actions: {
      changeSelectState() {
         this.selectState = !this.selectState;
      }
   }
   
})