<template>
  <div class="mt-5">
    <b-container>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
          title="Combos"
          :img-src="require('../assets/servicio1.png')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Haz un pedido rápido con el combo que más se adecúe a tus necesidades.
          </b-card-text>

          <b-button href="/servicios/combos" variant="primary">Ir a Combos</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
          title="Empanadas"
          :img-src="require('../assets/servicio2.png')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Elige entre nuestra gran variedad de empanadas y explora sus sabores.
          </b-card-text>

          <b-button href="/servicios/empanadas" variant="primary">Ir a Empanadas</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
          title="Bebidas"
          :img-src="require('../assets/servicio3.png')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Acompaña tu pedido con una de nuestras refrescantes bebidas.
          </b-card-text>

          <b-button href="/servicios/bebidas" variant="primary">Ir a Bebidas</b-button>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Servicios",
};
</script>