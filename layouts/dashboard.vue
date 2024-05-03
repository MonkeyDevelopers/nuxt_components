<template>
   
   <div class="layout">
      
      <Transition name="sidebar-show">
         <div class="sidebar" v-if="sidebarState">
            <div class="sidebar_header">
               <h2>Layout</h2>
               <!-- <icon v-if="sidebarState" @click="sidebarStore.changeSidebarState()" name="ph:text-align-right" class="header_sidebar_close" /> -->
            </div>
            <div class="sidebar_links">
               <h3>Links</h3>
               
               <div class="sidebar_links_body">
                  <NuxtLink to="/layouts" class="s_link_item">
                     <icon name="ph:squares-four" class="item_link_icon" />
                     <span>Inicio</span>
                  </NuxtLink>
                  <NuxtLink to="/forms" class="s_link_item">
                     <icon name="ph:wallet" class="item_link_icon" />
                     <span>Finanças</span>
                  </NuxtLink>
                  <NuxtLink to="/test" class="s_link_item">
                     <icon name="ph:users" class="item_link_icon" />
                     <span>Usuários</span>
                  </NuxtLink>
               </div>
               
            </div>
            
         </div>
      </Transition>
      <div class="layout_content">
         
         <header>
            <div class="header_col">
               
               <icon v-if="!sidebarState" @click="sidebarStore.changeSidebarState()" name="ph:text-align-left" class="header_btn_open_menu" />
               <icon v-if="sidebarState" @click="sidebarStore.changeSidebarState()" name="ph:text-align-right" class="header_btn_open_menu" />
               
               <div class="header_text">
                  <h2>Titulo da Página</h2>
                  <p>Descrição da Página muito longa btw</p>
               </div>
            </div>
            <div @click="sidebarStore.changeMenuState()" class="header_avatar">
               <img src="/avatar.jpg" alt="">
            </div>
            <Transition name="menu-show">
               <div @click="sidebarStore.changeMenuState()" v-if="menuState" ref="ref_menu" class="header_menu">
                  <div class="header_menu_infos">
                     <div class="header_menu_avatar">
                        <img src="/avatar.jpg" alt="">
                     </div>
                     <h2>Davi Mello</h2>
                  </div>
                  <hr>
                  <div class="header_menu_links">
                     <button @click="changeColorMode()" class="header_menu_btn">
                        <icon v-if="colorMode.preference == 'dark'" name="ph:moon" class="header_menu_icon" />
                        <icon v-if="colorMode.preference == 'light'" name="ph:sun" class="header_menu_icon" />
                        <span>Mudar Tema</span>
                     </button>
                     <button class="header_menu_btn">
                        <icon name="ph:sign-out" class="header_menu_icon" />
                        <span>Sair</span>
                     </button>
                  </div>
               </div>
            </Transition>
         </header>
         
         <div class="layout_body">
            <slot />
         </div>
         
      </div>
      
   </div>
   
</template>

<script setup>

   // theme   
   const colorMode = useColorMode()

   const sidebarStore = useSidebarStore();
   const {sidebarState} = storeToRefs(sidebarStore);
   const {menuState} = storeToRefs(sidebarStore);
   
   
   function changeColorMode() {
      colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
   }
   
   
   const ref_menu = ref(null);
   onClickOutside(ref_menu, (event) => {
      if(menuState.value == true) {
         menuState.value = false;
      }
   })

</script>

<style scoped>

   .layout {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
   }
   
   /* sidebar */
   
   .sidebar {
      width: 270px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
      row-gap: 60px;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
      z-index: 2;
      transition: .3s;
   }
   
   .sidebar_header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   
   .sidebar_header h2 {
      font-size: 18px;
      font-weight: 600;
      color: #171717;
   }
   
   .sidebar_header .header_sidebar_close {
      font-size: 29px;
      padding: 3px;
      cursor: pointer;
      transition: .3s;
      color: #171717;
      border-radius: 3px;
   }
   
   .sidebar_header .header_sidebar_close:hover {
      background: #eeeeee;
   }
   
   .sidebar_links {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
   }
   
   .sidebar_links h3 {
      font-size: 12px;
      font-weight: 500;
      color: #878787;
   }
   
   .sidebar_links_body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 4px;
   }
   
   .sidebar_links_body .router-link-active {
      background: #171717;
   }
   
   .sidebar_links_body .router-link-active .item_link_icon {
      color: #d9d9d9 !important;
   }
   
   .sidebar_links_body .router-link-active span {
      color: #d9d9d9 !important;
   }
   
   .sidebar_links_body .router-link-active:hover {
      background: #171717;
   }
   
   .s_link_item {
      width: 100%;
      padding: 10px 15px;
      border-radius: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 8px;
      cursor: pointer;
      transition: .3s;
   }
   
   .s_link_item:hover {
      background: #ececec;
   }
   
   .s_link_item .item_link_icon {
      font-size: 18px;
      color: #171717;
      margin-top: 1px;
   }
   
   .s_link_item span {
      font-size: 13px;
      font-weight: 500;
      color: #171717;
   }
   
   /* content */
   
   .layout_content {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: .3s;
   }
   
   /* header */
   
   .layout_content header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
      z-index: 2;
      position: relative;
      transition: .3s !important;
   }
   
   .header_col {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 15px;
   }
   
   .header_col .header_btn_open_menu {
      font-size: 33px;
      padding: 3px;
      cursor: pointer;
      color: #171717;
      border-radius: 3px;
      transition: .3s;
   }
   
   .header_col .header_btn_open_menu:hover {
      background: #f6f6f6;
   }
   
   .header_text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
   
   .header_text h2 {
      font-size: 16px;
      font-weight: 600;
      color: #171717;
   }
   
   .header_text p {
      font-size: 13px;
      font-weight: 400;
      color: #9f9f9f;
   }
   
   .header_avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
      transition: .3s;
   }
   
   .header_avatar:hover {
      transform: scale(1.1);
   }
   
   .header_avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   
   /* menu */
   
   .header_menu {
      width: 240px;
      padding: 10px;
      background: #fff;
      border: 1px solid #f0f0f0;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
      border-radius: 8px;
      position: absolute;
      top: 40px;
      right: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
   }
   
   .header_menu_infos {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 10px;
      padding: 5px;
   }
   
   .header_menu_avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
      transition: .3s;
   }
   
   .header_menu_avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   
   .header_menu_infos h2 {
      font-size: 14px;
      font-weight: 600;
      color: #353535;
   }
   
   .header_menu hr {
      width: 100%;
      height: 1px;
      background: #eaeaea;
      border-radius: 10px;
   }
   
   .header_menu_links {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 2px;
   }
   
   .header_menu_btn {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 8px;
      padding: 10px;
      border-radius: 6px;
      cursor: pointer;
      transition: .3s;
      background: none;
      
   }
   
   .header_menu_btn .header_menu_icon {
      font-size: 17px;
      color: #171717;
   }
   
   .header_menu_btn span {
      font-size: 13px;
      font-weight: 500;
      color: #171717;
   }
   
   .header_menu_btn:hover {
      background: #f3f3f3;
   }
   
   
   
   
   
   
   
   
   /* page body */

   .layout_body {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: #fff;
      overflow: scroll;
      padding: 20px;
      transition: .3s;
   }
   
   
   /* media queries */
   
   @media screen and (max-width: 700px) {
   }
   
   /* transitions */
   
   /* menu-show */
   .menu-show-enter-active {
      transition: all .3s;
   }
   
   .menu-show-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   
   .menu-show-enter-from,
   .menu-show-leave-to {
      opacity: 0;
   }
   
   /* sidebar-show */
   .sidebar-show-enter-active {
      transition: all .3s;
   }
   
   .sidebar-show-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   
   .sidebar-show-enter-from,
   .sidebar-show-leave-to {
      margin-left: -270px;
      opacity: 0;
   }
   
</style>