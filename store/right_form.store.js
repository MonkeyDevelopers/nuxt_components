export const useRightForm = defineStore('right_form', {
   
   state() {
      return {
         rightFormState: false
      }
   },
   
   actions: {
      changeRightFormState() {
         this.rightFormState = !this.rightFormState;
      }
   }
   
});