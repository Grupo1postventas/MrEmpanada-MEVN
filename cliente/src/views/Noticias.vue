<template>
  <div class="mt-5">
    <b-container>
      <b-row class="mt-5">
        <b-col cols="12" md="6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="require('../assets/emp1.png')"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Sabías Que...">
                  <b-card-text>
                    Las empanadas se han convertido en un símbolo gastronómico
                    de Colombia, teniendo una marca única en cada región del
                    país.
                  </b-card-text>
                </b-card-body>
                <b-button
                  href="https://www.colombia.co/pais-colombia/empanadas-colombianas-simbolo-de-la-gastronomia-del-pais/"
                  variant="info"
                  >Saber más</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="12" md="6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="require('../assets/emp2.png')"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="El Incierto Origen de la Empanada...">
                  <b-card-text>
                    Pese a ser una comida típica en muchos lugares de america
                    latina, el origen de las empanadas sigue siendo confuso al
                    día de hoy.
                  </b-card-text>
                </b-card-body>
                <b-button
                  href="https://www.historiacocina.com/historia/articulos/empanada.htm"
                  variant="info"
                  >Saber más</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <!-- Segunda Fila -->

      <b-row class="mt-4">
        <b-col cols="12" md="6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="require('../assets/emp3.png')"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Receta del Día">
                  <b-card-text>
                    Aprende a preparar tus propias empanadas con esta sencilla
                    receta.
                  </b-card-text>
                </b-card-body>
                <b-button
                  href="https://www.cocina-colombiana.com/recetas/entradas/empanadas-colombianas"
                  variant="info"
                  >Saber más</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="12" md="6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="require('../assets/emp4.png')"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Festival de la Empanada">
                  <b-card-text>
                    Un evento en donde las personas podrán disfrutar de una gran
                    variedad de empanadas .
                  </b-card-text>
                </b-card-body>
                <b-button
                  href="https://www.radionacional.co/cultura/gastronomia/primer-festival-de-la-empanada-se-realizara-en-neiva"
                  variant="info"
                  >Saber más</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <br><br>
  </div>
</template>

<script>
export default {
  name: "Noticias",
};
</script>
