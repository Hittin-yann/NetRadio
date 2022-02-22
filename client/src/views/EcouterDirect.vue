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
          <button @click="reqInvite" type="submit" id='inv_bt'>Devenir invité</button>
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
        id: null
      };
  },
  mounted(){
    console.log("You joined the live");
    //recois le song de l'animateur
    this.socket.on("voice", (arrayBuffer) => {
      //console.log(arrayBuffer);
      this.blob = new Blob([arrayBuffer], { type: "audio/ogg; codecs=opus" });
      this.audio = document.createElement("audio");
      this.audio.src = window.URL.createObjectURL(this.blob);
      this.audio.play();
    });
    // recois la reponse de l'animateur
    this.socket.on("authorisation", (invite) => {
      if(this.id === invite.id){
        if(invite.response) {
          console.log("je suis invité");
        }else{
          console.log("Demande refuser !");
        }
      }
    });
  },
  methods : {
    quitLive() {
      this.$router.push("/");
    },
    reqInvite(){
      const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      this.id = genRanHex(20);
      console.log(this.id);
      this.socket.emit("invite", { id: this.id });
    }
  }
}
</script>

<style lang="scss">
</style>