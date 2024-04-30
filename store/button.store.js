export const useButtonStore = defineStore('button_store', {
   
   state() {
      return {
         buttonState: false
      }
   },
   
   actions: {
      changeButtonState() {
         this.buttonState = !this.buttonState
      }
   }
   
   
})