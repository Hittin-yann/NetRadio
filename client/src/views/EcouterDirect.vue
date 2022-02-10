<template>
  <section>
    <HeaderPrincipal />
      <div id="ledirect-content">
          <div id="ledirect-content-title">
              <h1><u>"LE JOURNAL" - EPISODE 101</u></h1>
          </div>
          <div id="ledirect-content-img">
              <img src="/img/lejournal.png" alt="Le journal">
          </div>
          <button @click="quitLive" type="submit" id="btn-stop">Arrêter le direct</button>
      </div>
    <Footer />
  </section>
</template>

<script>
import { io } from "socket.io-client";
export default {
 data() {
    return {
      socket: io("http://localhost:3000"),
      blob: {},
      audio: "",
    };
},
mounted(){
  console.log("You joined the live");
  this.socket.on("voice", (arrayBuffer) => {
    console.log(arrayBuffer);
    this.blob = new Blob([arrayBuffer], { type: "audio/ogg; codecs=opus" });
    this.audio = document.createElement("audio");
    this.audio.src = window.URL.createObjectURL(this.blob);
    this.audio.play();
  });
  if(Object.keys(this.blob).length === 0){
    alert("Il ni a pas de live pour le moment !");
  }
},
methods : {
 quitLive() {
      this.$router.push("/");
    },
  }
}
</script>

<style lang="scss">

</style>