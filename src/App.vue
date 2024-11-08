<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style>
/* Estils globals */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f0f4f8, #e4ebf1);
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 50px;
}

h1, h2, h3 {
  color: #2c3e50;
}

p {
  color: #34495e;
}
</style>
