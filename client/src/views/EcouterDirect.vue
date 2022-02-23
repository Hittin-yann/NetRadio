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
        id: null,
        invite: false
      };
  },
  mounted(){
    console.log("You joined the live");
    //recois le song de l'animateur
    this.socket.on("voice", (arrayBuffer) => {
      let blob = new Blob([arrayBuffer], { type: "audio/ogg; codecs=opus" });
      let audio = document.createElement("audio");
      audio.src = window.URL.createObjectURL(blob);
      audio.play();
    });
    //recois le song de l'inviter
    this.socket.on("voiceInvite", (arrayBuffer) => {
      console.log("test");
      if(this.invite) {
        let blob = new Blob([arrayBuffer], { type: "audio/ogg; codecs=opus" });
        let audio = document.createElement("audio");
        audio.src = window.URL.createObjectURL(blob);
        audio.play();
      }
    });
    this.socket.on("diconnect", () => {
      this.invite = false;
    });
    // recois la reponse de l'animateur
    this.socket.on("authorisation", (invite) => {
      if(this.id === invite.id){
        if(invite.response) {
          console.log("je suis invité");
          this.invite = invite.response;

          let constraints = {
                audio: true
            };
            let mediaRecorder;

            navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
                mediaRecorder = new MediaRecorder(mediaStream);
                mediaRecorder.onstart = () => {
                    this.chunks = [];
                };

                // Lorsque la donnée son est prête.
                mediaRecorder.ondataavailable = (e) => {
                  this.chunks.push(e.data);
                  let blob = new Blob(this.chunks, {
                      type: "audio/mp3; codecs=opus"
                  });
                  if (this.invite) {
                      this.socket.emit("radioInvite", blob);
                  }
                };

                //Commencer le live
                mediaRecorder.start();

                //L'interval de diffusion
                setInterval(() => {
                    if (this.invite) {
                        mediaRecorder.stop();
                        mediaRecorder.start();
                    }
                }, 1000);
            });
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
      this.socket.emit("invite", { id: this.id, accepted: false });
    }
  }
}
</script>

<style lang="scss">
</style>