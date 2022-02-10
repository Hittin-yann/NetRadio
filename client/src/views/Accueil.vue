<template>
  <section>
      <HeaderPrincipal />
      <div id="content-accueil">
        <div id="content-left">
            <img src="img/bg-emission.png">
            <div id="content-info">
                <h1>Le journal : Episode 101</h1>
                <h3>Par George</h3>
                <router-link to="/EcouterDirect">
                    <button type="submit" id="btn-play">
                        <img src="img/play.png">
                        <strong>Ecouter le direct</strong>
                    </button>
                </router-link>
            </div>
        </div>
        <div id="content-right">
            <div class="content-program">
                <div class="content-program-info content-program-clicked">
                    <p class="content-program-time"><strong>10h00</strong></p>
                    <p class="content-program-name"><strong>Le journal : Episode 101</strong></p>
                </div>
                <div class="content-program-info content-program-not-clicked">
                    <p class="content-program-time"><strong>10h00</strong></p>
                    <p class="content-program-name"><strong>Emission X : Episode 89</strong></p>
                </div>
                <div class="content-program-info content-program-not-clicked">
                    <p class="content-program-time"><strong>11h00</strong></p>
                    <p class="content-program-name"><strong>Le chronique de George : Episode 2</strong></p>
                </div>
                <div class="content-program-info content-program-not-clicked">
                    <p class="content-program-time"><strong>À suivre</strong></p>
                    <p class="content-program-name"><strong>Le journal : Episode 104</strong></p>
                </div>
            </div> 
        </div>
    </div>
    <Footer />
  </section>
</template>

<script>
</script>
<style lang="scss">
//npm run build
</style>