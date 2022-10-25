<template>
  <div class="LayoutDefault">
    <nav >
     <the-nav-bar></the-nav-bar>
    </nav>
    <the-side-bars></the-side-bars>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <footer >
    <the-footer></the-footer>
    </footer>
  </div>
  
</template>

<script>
 import TheNavBar from '@/components/layouts/TheNavBar.vue'
 import TheFooter from '@/components/layouts/TheFooter.vue'
 import TheSideBars from '@/components/layouts/TheSideBars.vue'
export default {
 components: {TheNavBar,TheFooter,TheSideBars},
  name: `LayoutDefault`,
 
};
</script>

<style >
.LayoutDefault__main{
  justify-content :center;
 
  margin: 8%;
  text-align: center;
  min-height:800px;
  background-attachment: fixed;

}
</style>



