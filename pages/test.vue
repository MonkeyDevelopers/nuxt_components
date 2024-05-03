<template>
   <div>
     <h1>Color mode: {{ $colorMode.value }}</h1>
     <select v-model="$colorMode.preference">
       <option value="system">System</option>
       <option value="light">Light</option>
       <option value="dark">Dark</option>
       <option value="sepia">Sepia</option>
     </select>
   </div>
 </template>
 
 <script setup>
 const colorMode = useColorMode()
//  colorMode.preference = 'dark';
 console.log(colorMode.preference)
 </script>
 
 <style>
 body {
   background-color: #fff;
   color: rgba(0,0,0,0.8);
 }
 .dark-mode {
   background-color: #091a28;
   color: #ebf4f1;
 }
 .light-mode {
   background-color: #ffffff;
 }
 .sepia-mode {
   background-color: #f1e7d0;
   color: #433422;
 }
 </style>