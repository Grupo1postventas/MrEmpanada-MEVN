<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="warning">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'Home' }">
          <b-img :src="require('./assets/S1.png')" alt="Fluid image"></b-img>
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
    <router-view />

    <!-- Footer -->
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text class="mx-2">
          <v-btn icon href="https://www.facebook.com/MisterEmpanadasCali" class="mx-4">
            <v-icon size="24px">mdi-facebook</v-icon>
          </v-btn>

          <v-btn icon href="https://www.instagram.com/mr._empanada/" class="mx-4">
            <v-icon size="24px">mdi-instagram</v-icon>
          </v-btn>

          <v-btn icon href="https://github.com/Grupo1postventas" class="mx-4">
            <v-icon size="24px">mdi-github</v-icon>
          </v-btn>
        </v-card-text>
        
        <br><br>

        <b-row>
          <b-col cols="12" md="6">
            <h4>Motivanción del desarrollo del proyecto:</h4>
            <div class="container">
              Este proyecto ha sido realizado con carácter educativo y de
              aprendizaje de sus participantes, con el fin de desarrollar
              habilidades en metodología SCRUM, y desarrollos en HTML, CSS,
              Javascript y frameworks como Bootstrap y Vue.
            </div>
          </b-col>

          <b-col>
            <h4>Información de Contacto:</h4>
            <div class="container">
              <b> Product Owner:</b>
              <a href="mailto: buitragolopezyeison@gmail.com">
                Yeison Buitrago</a
              ><br />
              <b> Scrum Master:</b>
              <a href="mailto: fredyospina119@gmail.com"> Jhon Fredy Ospina</a
              ><br />
              <b> Develop Team:</b>
              <a href="mailto: marioaa25@gmail.com"> Mario Acosta</a><br />
            </div>
          </b-col>
        </b-row>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <b> Carrera 36# 4B-31 Barrio San Fernando Cali, Colombia</b> <br />
          {{ new Date().getFullYear() }} — <strong>Mr.Empanada</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style>
article {
  display: flex !important;
  justify-content: space-evenly;
}
</style>