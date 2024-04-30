export const useModalStore = defineStore('modal', {
   
   state() {
      return {
         modalState: false
      }
   },
   
   actions: {
      changeModalState() {
         this.modalState = !this.modalState;
      }
   }
   
})