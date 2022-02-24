<template>
     <div>
          <Header/>
          <h1>{{nomCategorie}}</h1>
          <div class="emissionsContainer">
               <div class="emission" v-for="emission in emissions" :key="emission.id">
               <h2>{{emission.Description}}</h2>
               <p>
                    <u>Genre</u> : {{emission.Genre}} <br>
                    <u>Date de diffusion</u>  : {{emission.diffusionDate}} <br>
                    <u>Heure de diffusion</u>  : {{emission.diffusionTime}} <br>
                    <u>Animateur</u>  : {{emission.idAnimateur}}
               </p>
               </div>
          </div>
          <Footer/>
     </div>
</template>

<script>
export default {
     name: "EmissionsCategorie",
     data() {
          return {
               nomCategorie : '',
               emissions : []
          };
     },
     mounted() {
          this.nomCategorie = this.$route.params.nom

          this.$api
               .get("/emission/"+this.nomCategorie)
               .then((response) => {
                    this.emissions = response.data
               });
     }
}
</script>

<style scoped>
     div{
          color: white;
     }
     .emissionsContainer{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
     }
     .emission{
          border-radius: 10px;
          background-color: #FF3535;
          font-weight: bold;
          width: 40%;
     }
</style>