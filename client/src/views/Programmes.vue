<template>
    <section>
      <HeaderPrincipal/>
      <div id="programmes-content">
        <h1><u><strong>PROGRAMMES DE LA SEMAINE</strong></u></h1>
        <div id="programmes-content-date">
            <img src="img/btn-previous.png">
            <p>Mardi, 14 decembre 2021</p>
            <img src="img/btn-next.png">
        </div>
        <div id="programmes-content-emission">
            <div class="programmes-content-emission-time">
                <h2><u>10H00</u></h2>
                <img src="img/favoris.png" alt="Favoris">
            </div>
            <ul class="programmes-content-emission-list">
                <li>
                    <h3>"Le journal" - Episode 101</h3>
                    <button @click="voirDetail()" type="submit" class="btn-info">Voir plus</button>
                </li>
                <li>
                    <h3>"Emission X" - Episode 89</h3>
                    <button @click="voirDetail()" type="submit" class="btn-info">Voir plus</button>
                </li>
            </ul>
            <div class="programmes-content-emission-time">
                <h2><u>11H00</u></h2>
                <img src="img/favoris.png" alt="Favoris">
            </div>
            <ul class="programmes-content-emission-list">
                <li>
                    <h3>"Le chronique de George" - Episode 2</h3>
                    <button @click="voirDetail()" type="submit" class="btn-info">Voir plus</button>
                </li>
            </ul>
            <div class="programmes-content-emission-time">
                <h2><u>12H00</u></h2>
                <img src="img/favoris.png" alt="Favoris">
            </div>
            <ul class="programmes-content-emission-list">
                <li>
                    <h3>"Le journal" - Episode 102</h3>
                    <button @click="voirDetail()" type="submit" class="btn-info">Voir plus</button>
                </li>
            </ul>
        </div>
        <div id="popup-programme" class="modal">
          <div class="modal-content">
              <span class="close" @click="close()">&times;</span>
              <h2><u>NOM DE L'EMISSION</u></h2>
              <p>Le journal</p>
              <h2><u>DATE ET HEURE DE L'EMISSION</u></h2>
              <p>Mardi, 14 decembre 2021</p>
              <p>10H00</p>
              <h2><u>DESCRIPTION DE L'EMISSION</u></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div id="popup-programme-footer">
                  <h2><u>N DE L'EPISODE : 100</u></h2>
                  <img src="img/notification.png">
              </div>
          </div>
        </div>
      </div>
      <Footer />
  </section>
</template>

<script>

export default {
    data(){
      return{
        test: false
      }
    },
    methods: {
      close() {
         document.querySelectorAll(".close").forEach(closeBtn => {
              closeBtn.addEventListener('click', () => {
                  document.getElementById("popup-programme").style.display = "none";
              })
          });
          window.onclick = function(event) {
              if (event.target === document.getElementById("popup-programme")) {
                  document.getElementById("popup-programme").style.display = "none";
              }
          }
      },
      voirDetail(){
          document.querySelectorAll(".btn-info").forEach(programmeBtn => {
              programmeBtn.addEventListener('click', () => {
                  document.getElementById("popup-programme").style.display = "block";
              })
          });
        }
    }
}
</script>
<style lang="scss">

</style>
