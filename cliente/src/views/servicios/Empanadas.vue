<template>
    <div class="mt-5">
    <b-container>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
        
          title="Mr. Hawaiana"
          :img-src="require('./assets/mrhawuania.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
           Pefecta combinacioón de trozos de jamón de cerdo ahumado combinado con piña colada y queso doble crema. 
          </b-card-text>
          <b-button  variant="primary">Comprar</b-button>
          
          
          
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
        
          title="Mr. Jamón y queso"
          :img-src="require('./assets/mrjamonyqueso.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Trozos de jamón de cerdo ahumado combinado con delicioso queso crema.
          </b-card-text>

          <b-button  variant="primary">Comprar</b-button>
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
        
          title="Mr. Chorizo"
          :img-src="require('./assets/mrchorizo.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
           Exquisito chorizo de cerdo combinado con maiz tierno y delicioso queso crema. 
          </b-card-text>

          <b-button  variant="primary">Comprar</b-button>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
    <b-row class="mt-5">
      <b-col cols="12" md="6">
       <b-car>
         
       </b-car>
<b-button href="/servicios/combos" variant ="primary">Combos</b-button>
     </b-col>

     <b-col cols="12" md="6">
       <b-car>
         <b-button href="/servicios/bebidas" variant ="primary">Bebidas</b-button>
       </b-car>

     </b-col>
     


   </b-row>
  </div>
</template>