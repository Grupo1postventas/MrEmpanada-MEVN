<template>
  <div class="mt-5">
    <b-container>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
        overlay
          title="Pruebita"
          :img-src="require('./assets/comboempanadas.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            1 Jugo natural, 1 Mr. Chorizo, 1 Mr. Arequipe
          </b-card-text>

          <b-button  variant="primary">Comprar</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
        overlay
          title="Exquisito"
          :img-src="require('./assets/comboempanadas.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            2 Jugos Naturales, 1 Mr. Chorizo, 1 Mr. Jamón y queso,1 Mr. Arequipe
          </b-card-text>

          <b-button  variant="primary">Comprar</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
        overlay
          title="Suculento"
          :img-src="require('./assets/comboempanadas.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            3 Jugos naturales, 3 Mr. Jamón y queso, 2 Mr. Chorizo, 1 Mr. Arequipe. 
          </b-card-text>

          <b-button  variant="primary">Comprar</b-button>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
    <b-row class="mt-5">
      <b-col cols="12" md="6">
       

     </b-col>

     <b-col cols="12" md="6">
       <b-car>
         <b-button href="/servicios/empanadas" variant ="primary">Empanadas</b-button>
       </b-car>

     </b-col>
     


   </b-row>
  </div>
</template>