<template>
    <nav class="navbar">
        <div id="navbar-logo">
            <router-link to="/"><img src="img/logo.png" alt="Net'Radio"></router-link>
        </div>
        <div id="navbar-content">
            <ul>
                <li id="programmes">
                    <router-link to="/Programmes"><strong>Programmes</strong></router-link>
                </li>
                <li id="podcasts">
                    <router-link to="/EnDirect"><strong>Podcasts</strong></router-link>
                </li>
                <li id="ledirect">
                    <router-link to="/EcouterDirect">
                        <div id="ledirect-play">
                            <img src="img/ledirect.png" alt="Le direct">
                        </div>
                        <div id="ledirect-text"><strong>LE DIRECT</strong></div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div id="navbar-search">
            <input type="text" value="Recherche..."/>
            <button type="submit" id="btn-search"><i class="fas fa-search"></i></button>
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
