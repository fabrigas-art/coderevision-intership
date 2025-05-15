
<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view/> -->
  <Hey/>
</template>
<script>
import Hey from './components/Hey.vue';
export default {
  name: 'App',
  components: {
    Hey
  }
}

</script>
<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color: #42b983;
}
h2{
  color: #35495e;
}
h3{
  color: #42b983;
}
h4{
  color: #35495e;
}

</style>
<script>


</script>
