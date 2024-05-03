export const useSidebarStore = defineStore('sidebar', {
   
   state() {
      return {
         sidebarState: true,
         menuState: false
      }
   },
   
   actions: {
      changeSidebarState() {
         this.sidebarState = !this.sidebarState;         
      },
      changeMenuState() {
         this.menuState = !this.menuState;         
      },
   }
   
})