<template>
  <section>
    <div class="main">
      <h1 class="title">Auditeur</h1>
      <div class="btn">
        <button @click="joinLive" id="join_live_btn">Join live</button>
        <button @click="quitLive" id="quit_live_btn">Quit live</button>
      </div>
    </div>
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
  methods: {
    joinLive() {
      console.log("You joined the live");
      this.socket.on("voice", (arrayBuffer) => {
        this.blob = new Blob([arrayBuffer], { type: "audio/ogg; codecs=opus" });
        this.audio = document.createElement("audio");
        this.audio.src = window.URL.createObjectURL(this.blob);
        this.audio.play();
      });
    },
    quitLive() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  position: fixed;
  top: 30%;
  left: 37%;
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
    #join_live_btn {
      background: rgb(34, 114, 19);
      border: none;
      border-radius: 3px;
      outline: none;
      cursor: pointer;
      width: 100px;
      height: 100px;
      margin-right: 2em;
    }
    #quit_live_btn {
      background: rgb(168, 8, 8);
      border: none;
      border-radius: 3px;
      outline: none;
      width: 100px;
      height: 100px;
      cursor: pointer;
      margin-right: 2em;
    }
  }
}
</style>
