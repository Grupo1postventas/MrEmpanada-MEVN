<template>
  <div class="mt-5">
    <b-container>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
        overlay
          title="Jugo de maracuya"
          :img-src="require('./assets/jugo-de-maracuya.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Jugo natural de maracuya
          </b-card-text>

          <b-button  variant="primary">Comprar</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
        overlay
          title="Limonada"
          :img-src="require('./assets/jugo-de-maracuya.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            ¡Deliciosa limonada!
          </b-card-text>

          <b-button  variant="primary">Comprar</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
        overlay
          title="Capuchino"
          :img-src="require('./assets/jugo-de-maracuya.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Bebida caliente de café
          </b-card-text>

          <b-button  variant="primary">Comprar</b-button>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
   <b-row class="mt-5">
     <b-col cols="12" md="6">
       <b-car>
         <b-button  href="/servicios/empanadas" variant ="primary">Empanadas</b-button>
       </b-car>

     </b-col>
     


   </b-row>
  </div>
  
</template>