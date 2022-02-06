<template>
  <nav class="navbar">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"> Accueil </router-link>

        <router-link class="navbar-item" to="/Administrateur">Administrateur</router-link>

        <router-link class="navbar-item" to="/Animateur">Animateur</router-link>

        <router-link class="navbar-item" to="/Auditeur">Auditeur</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar-menu {
  background-color: white;
}
</style>
