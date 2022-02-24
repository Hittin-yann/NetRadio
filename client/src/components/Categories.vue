<template>
     <div class="listeCategories">
          <div v-for="categorie in categories" :key="categorie.nom">
               <router-link :to="{name:'EmissionsCategorie',params:{nom: categorie.nom}}">
                    <button>{{categorie.nom}}</button>
               </router-link>

          </div>
     </div>
</template>

<script>
export default {
     name: "Categories",
     data() {
          return {
               categories : []
          };
     },
     mounted(){
          this.$api
               .get("/categories")
               .then((response) => {
                    this.categories = response.data
               });
     },
     methods : {

     }
}
</script>

<style scoped>
     .listeCategories{
          margin: auto;
          width: 50%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
     }
     button{
          border-radius: 10px;
          background-color: #FF3535;
          color: white;
          font-weight: bold;
          padding: 10px;
     }
</style>