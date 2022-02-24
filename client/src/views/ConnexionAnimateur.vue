<template>
    <div>
        <div id="compte-header">
			<a href="accueil.html"><img src="img/logo.png" /></a>
		</div>
		<div id="compte-content">
			<form @submit.prevent="validationConnexion()" id="compte-content-connection">
				<h1>CONNEXION</h1>
				<div id="compte-content-connection-form">
					<p>Email</p>
					<input required v-model="emailconnexion" type="email" class="input" />
					<p>Mot de passe</p>
					<input required v-model="passwordconnexion" type="password" class="input" />
					<div class="btn">
                        <button id="btn-connection">Se connecter</button>
					</div>
				</div>
			</form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConnexionAnimateur",
	data() {
		return {
			emailconnexion: "",
			passwordconnexion: ""
		};
	},
	methods: {
		validationConnexion() {
			let donnees = {
				email: this.emailconnexion,
				password: this.passwordconnexion,
			};
			this.$api
				.post("/connexionAnimateur",donnees)
				.then((response) => {
					alert(response.data.message);
					this.$store.commit('setToken',response.data.token);
					this.$store.commit('adjustMember',{
						member : response.data.member,
						status : response.data.status
						});
					this.$router.push("/")
				});
		}
    }
};
</script>

<style>

</style>