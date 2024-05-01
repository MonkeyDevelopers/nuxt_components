<template>
   
   <div class="card">
      <div class="header_card">
         <div class="img_card"></div>
         <div class="header_infos">
            <div class="name"></div>
            <div class="description"></div>
         </div>
      </div>
      <div class="body_card">
         <div class="body_description"></div>
         <div class="body_description"></div>
         <div class="body_description_low"></div>
      </div>
   </div>
   
</template>

<style scoped>

   .card {
      width: 300px;
      padding: 20px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: white;
      /* box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.054); */
      border: 1px solid #efefef;
      row-gap: 20px;
   }
   
   .header_card {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 20px;
   }
   
   .img_card {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      animation: skeleton 0.8s linear infinite alternate;
      transition: .3s;
      
   }
   
   .header_infos {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
   }
   
   .name {
      width: 90px;
      height: 9px;
      border-radius: 10px;
      animation: skeleton 0.8s linear infinite alternate;
   }
   
   .description {
      width: 130px;
      height: 9px;
      border-radius: 10px;
      animation: skeleton 0.8s linear infinite alternate;
   }
   
   .body_card {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 9px;
   }
   
   .body_description {
      width: 100%;
      height: 9px;
      border-radius: 10px;
      animation: skeleton 0.8s linear infinite alternate;
   }
   
   .body_description_low {
      width: 60%;
      height: 9px;
      border-radius: 10px;
      animation: skeleton 0.8s linear infinite alternate;
   }
   
   @keyframes skeleton {
      0%{
         background: #f7f7f7;
      }100%{
         background: #e0e0e0;
      }
   }
   

</style>