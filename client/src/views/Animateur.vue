<template>
  <section class="hero is-fullheight">
    <div class="main">
      <h1 class="title">Animateur</h1>
      <span :class="{ liveicon: isActive }"></span>
      <div class="btn">
        <button @click="startLive" id="live_btn">start live</button>
        <button @click="stopLive" id="stop_btn">stop live</button>
      </div>
    </div>
    <section class="sound-clips"></section>
    <audio id="audio" src="" ></audio>
  </section>
</template>

<script>
import { io } from "socket.io-client";
export default {
  data() {
    return {
      socket: io("http://localhost:3000"),
      bool: false,
      isActive: false,
      audioCtx: "",
      savedChunks: [],
      audio: "",
    };
  },
  mounted(){
    document.querySelector("#stop_btn").disabled = true;
  },
  methods: {
    startLive() {
      let constraints = { audio: true };
      let mediaRecorder;
      this.bool = true;
      document.querySelector("#stop_btn").disabled = false;


      navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
        mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorder.onstart = () => {
          this.chunks = [];
        };

        // Lorsque la donnée son est prête.
        mediaRecorder.ondataavailable = (e) => {
          this.chunks.push(e.data);
          this.savedChunks.push(e.data);
          var blob = new Blob(this.chunks, { type: "audio/mp3; codecs=opus" });
          if (this.bool) {
            this.socket.emit("radio", blob);
          }
        };

        //Commencer le live
        mediaRecorder.start();
        this.isActive = !this.isActive;

        //L'interval de diffusion
        setInterval(() => {
          if (this.bool) {
            mediaRecorder.stop();
            mediaRecorder.start();
          }
        }, 1000);
      });
    },

    stopLive() {
      console.log("Live stoped");
      this.bool = false;
      this.isActive = false;
      console.log(this.savedChunks);

      document.querySelector("#stop_btn").disabled = true;

      //créer l'élement audio
      this.audio = document.querySelector("#audio");
      this.audio.setAttribute("controls", "");

      const blob = new Blob(this.savedChunks, { type: 'audio/mp3; codecs=opus' });
      this.savedChunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      this.audio.src = audioURL;
      this.audio.play();
    },
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .title {
    flex-basis: 100%;
    color: white;
  }
  .btn {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    #live_btn {
      background: rgb(223, 22, 22);
      border: none;
      border-radius: 3px;
      outline: none;
      cursor: pointer;
      width: 100px;
      height: 100px;
      margin-right: 2em;
    }

    #stop_btn {
      background: rgb(71, 63, 63);
      border: none;
      border-radius: 3px;
      outline: none;
      width: 100px;
      height: 100px;
      cursor: pointer;
      margin-right: 2em;
    }
    #record_btn {
      background: rgb(47, 146, 88);
      border: none;
      border-radius: 3px;
      outline: none;
      width: 100px;
      height: 100px;
      cursor: pointer;
      margin-right: 2em;
    }
  }

  //Icone live
  span.liveicon {
    position: absolute;
    left: 47%;
    margin-bottom: 1em;
    display: inline-block;
    position: relative;
    top: calc(50% - 5px);
    background-color: red;
    width: 15px;
    height: 15px;
    margin-left: 20px;
    border: 1px solid rgba(black, 0.1);
    border-radius: 50%;
    z-index: 1;
    &:before {
      content: "";
      display: block;
      position: absolute;
      background-color: rgba(red, 0.6);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: live 2s ease-in-out infinite;
      z-index: -1;
    }
  }
  @keyframes live {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(3.5, 3.5);
      background-color: rgba(red, 0);
    }
  }
}
</style>
