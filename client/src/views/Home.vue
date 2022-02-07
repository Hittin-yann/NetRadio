<template>
    <section class="hero is-fullheight">
      <h1 class="title"> NET'RADIO </h1>
      <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
              <div class="column is-7-tablet is-6-desktop is-5-widescreen">
                <router-link class="box" to="/Animateur">Je suis animateur</router-link>
                <router-link class="box" to="/Auditeur">Je suis auditeur</router-link>
                <router-link class="box" to="/">Je suis administrateur</router-link>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style lang="scss">
.title{
    text-align: center;
    color : white;
}
//npm run build
</style>
