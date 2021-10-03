<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="warning">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'Home' }">
          <b-img
            :src="require('./assets/S1.png')"
            alt="Fluid image"
          ></b-img>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav class="justify-content-center">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }" exact>
              <b-button variant="danger">Inicio</b-button>
            </b-nav-item>
            <b-nav-item :to="{ name: 'Servicios' }">
              <b-button variant="danger">Servicios</b-button>
            </b-nav-item>
            <b-nav-item :to="{ name: 'Noticias' }">
              <b-button variant="danger">Noticias</b-button>
            </b-nav-item>
            <b-nav-item :to="{ name: 'Equipo' }">
              <b-button variant="danger">Equipo</b-button>
            </b-nav-item>
            <b-nav-item :to="{ name: 'Registro' }">
              <b-button variant="secondary">Registro</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- Fin Header -->

    <b-container class="mt-5"></b-container>

    <router-view />

    <!-- Footer -->
    <v-footer dark padless class="mt-5">
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <b-row>
        <b-col cols="12" md="6">
        <h4> Motivanción del desarrollo del proyecto:</h4>
        Este proyecto ha sido realizado con carácter educativo y de aprendizaje de sus participantes, con el fin de desarrollar habilidades en metodología SCRUM, y desarrollos en HTML, CSS, Javascript y frameworks como Bootstrap y Vue.
        <br><br>
        <a href="https://github.com/Grupo1postventas" target="blank">Enlace Repositorio en Git-Hub</a>
        </b-col>

        <b-col>
        <article class="white--text pt-0">
          <h4>Información de Contacto:</h4>
        <p> <b>
                <a href="mailto: buitragolopezyeison@gmail.com">Product Owner : Yeison Buitrago</a><br>
                <a href="mailto: fredyospina119@gmail.com">Scrum Master: Jhon Fredy Ospina</a><br>
                <a href="mailto: marioaa25@gmail.com"> Develop Team: Mario Acosta</a><br>
                <br>
            </b> </p>
        </article>
        </b-col>
        </b-row>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          <h6>Carrera 36# 4B-31 Barrio San Fernando Cali, Colombia</h6>
          {{ new Date().getFullYear() }} — <strong>Mr.Empanada</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
article {
  display: flex !important;
  justify-content: space-evenly;
}
</style>