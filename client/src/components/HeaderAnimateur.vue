<template>
    <nav class="navbar">
        <div id="navbar-logo">
            <router-link to="/"><img src="img/logo.png" alt="Net'Radio"></router-link>
        </div>
        <div id="navbar-content">
            <ul>
                <li id="programmes">
                    <router-link to="/Programmes"><strong>Créneaux</strong></router-link>
                </li>
                <li id="podcasts">
                    <router-link to="/"><strong>Podcasts</strong></router-link>
                </li>
                <li id="emissions">
                    <router-link to="/">
                        <strong>Mes émissions</strong>
                    </router-link>
                </li>
            </ul>
        </div>
        <div id="navbar-compte">
            <router-link to="/"><img src="img/compte.png" alt="Connexion"></router-link>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
   
</style>
