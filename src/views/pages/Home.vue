<template>
  <div class="container-fluid">
    <!-- <img src="@/assets/plane.gif"/> -->
  <div class="row">
    <div class="col-sm frontend-side ">
     <div class="frontend-side-text"> 
     <button class="btn  btn-outline-secondary "><h5>I A PASSENGER</h5></button> </div>
    </div>
    <div class="col-sm uiux-side ">     
      <div class="uiux-side-text"> 
      <button class="btn  btn-outline-info text-light"  v-on:click="logint" type="submit"><b-nav-item to="/login" ><h5 class="text-light" >I AM AN AGENT</h5></b-nav-item>
</button>

      
      </div>

    </div>
  </div>
</div>
</template>
<!-- <Layout></Layout> -->
<script>
import Layout from "@/layouts/Layout";
// //import axios from "axios"
export default {
  components: {
    Layout,
  
  },

  methods: {
          logint:  () => {
      
       // this.$router.push({ path: '/login'});

            //this.$router.push({ path: '/login'});
          }
   

         
        }
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,800');

@media (min-width: 500px) {
  .col-sm-6 {
    width: 50%;
  }
}
/* html, body {
  height: 100%;
  min-height: 18em;
} */

.frontend-side {
   background-image: url("@/assets/plane.gif");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: auto;
  color: rgb(29, 49, 66);
  justify-content: center;
  display: flex;
  justify-items: center;

  
}
.frontend-side-text{
  margin: 50%;
  margin-top:70% ;
}
.uiux-side-text{
  margin: 50%;
  margin-top:70% ;

}
.uiux-side-text  button{
  width: 250px;
  height: 80px;
}
.frontend-side-text button{
  width: 250px;
  height: 80px;
}

.uiux-side {
  /* background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74452/website-post-its.png"); */
  height: 100vh;
  background: orange;
  color: aliceblue;
  justify-content: center;
  display: flex;
  justify-items: center;
}


 
</style>
