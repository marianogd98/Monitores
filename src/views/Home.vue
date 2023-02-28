<template>
  <div class="home">
        <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/charcuteria">Charcuteria</router-link> |
      <router-link to="/carniceria">Carniceria</router-link> |
      <router-link to="/cerdo">Cerdo</router-link> |
      <router-link to="/pollo">Pollo</router-link> |
      <router-link to="/pollo-gourmet">Pollera</router-link> |
      <router-link to="/panaderia">Panadería</router-link> |
      <router-link to="/rio-gourmet">Gourmet</router-link> |
      <router-link to="/rio-gourmet-jugos">Gourmet Jugos</router-link> |
      <router-link to="/rio-empanada">Empanadas</router-link> |
      <router-link to="/rio-menu">Rio Menu</router-link> |
      <router-link to="/rio-menu/1">Rio Menu Ppal</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Monitores Rio App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
