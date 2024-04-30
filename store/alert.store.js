export const useAlertStore = defineStore('alert', {
   
   state() {
      return {
         alertState: false
      }
   },
   
   actions: {
      changeAlertState() {
         this.alertState = !this.alertState;
         
         if(this.alertState) {
            setTimeout(() => {
               this.alertState = false
            }, 3000);
         }
      }
   }
   
})