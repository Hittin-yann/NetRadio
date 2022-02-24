<template>
	<div class="connexionVue">
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

			<form @submit.prevent="validationInscription()" id="compte-content-register">
				<h1>INSCRIPTION</h1>
				<div id="compte-content-register-form">
					<p>Nom</p>
					<input required v-model="nominscription" type="text" class="input" />
					<p>Email</p>
					<input required v-model="emailinscription" type="email" class="input" />
					<p>Mot de passe</p>
					<input required v-model="passwordinscription" type="password" class="input" />
					<div class="btn">
                        <button id="btn-register">S'inscrire</button>
					</div>
				</div>
			</form>
		</div>
		<div id="compte-footer">
			<p>
				Vous êtes invité(e) ?
                    <router-link to="/invite">
                        <button id="btn-invitation">Cliquez ici</button>
                    </router-link>
			</p>
			<p>
				Vous êtes un(e) Animateur(e) ?
                    <router-link to="/connexionAnimateur">
                        <button id="btn-invitation">Cliquez ici</button>
                    </router-link>
			</p>
			<div id="compte-footer-btn">
				<router-link to="/">
					<button type="submit" id="btn-accueil">Retourner à l'accueil</button>
				</router-link>
			</div>
		</div>
		<footer>@Net'Radio - 2021/2022</footer>
	</div>
</template>

<script>
export default {
	name: "ConnexionInscription",
	data() {
		return {
			emailconnexion: "",
			passwordconnexion: "",
			nominscription: "",
			emailinscription: "",
			passwordinscription: ""
		};
	},
	methods: {
		validationConnexion() {
			let donnees = {
				email: this.emailconnexion,
				password: this.passwordconnexion,
			};
			this.$api
				.post("/connexionAuditeur",donnees)
				.then((response) => {
					alert(response.data.message);
					this.$store.commit('setToken',response.data.token);
					this.$store.commit('adjustMember',{
						member : response.data.member,
						status : response.data.status
						});
					this.$router.push("/")
				});
		},
		validationInscription() {
			let donnees = {
				fullNameAuditeur: this.nominscription,
				emailAuditeur: this.emailinscription,
				mdpAuditeur: this.passwordinscription,
			};
			this.$api
				.post("/auditeurs",donnees)
				.then((response) => {
					console.log(response.message);
					alert("Compte créé, veuillez vous connecter");
					this.nominscription = "",
					this.emailinscription = "",
					this.passwordinscription = ""
				});

		},
	},
};
</script>

<style scoped>
</style>
