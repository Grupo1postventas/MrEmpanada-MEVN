<template>
  <div class="mt-5">
    <b-container>
      <div class="bebidas">  
      <div class="container mt-5">  
        <b-card  
          no-body  
          class="overflow-hidden"  
          style="max-width"  
          bg-variant="warning"  
          align="center"  
        >  <h1>Empanadas</h1>
          <b-card-body>  
           
        <div>


      <b-container>
        <b-row class="mt-5">
     <b-col cols="12" md="6">
       <b-car>
         
       </b-car>

     </b-col>
     <b-col cols="12" md="6">
       <b-car>
         <b-button  href="/servicios/empanadas" variant ="primary">Empanadas</b-button>
       </b-car>

     </b-col>
    </b-row>

      </b-container>
       
    </div> 
          </b-card-body>  
        </b-card>  
      </div> 
       
    </div>  
  

 <div class="bebidas">
            <div class= "container-mt5">
                <b-card>
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img
                                :src="require('./assets/Pruebita.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 25rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            class="center">
                            <h1>Pruebita</h1>
                                1 Jugo natural, 1 Mr. Chorizo, 1 Mr. Arequipe

                            </b-card-text>

                        </b-col>
                        <b-col md="4">
                           <b-button variant="primary">Comprar</b-button>

                        </b-col>

                    </b-row>

             
                </b-card>
                <b-card>
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img
                                :src="require('./assets/exquisito.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 25rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            title="Jugo de Maracuya">
                            <h1>Exquisito</h1>
                                2 Jugos Naturales, 1 Mr. Chorizo, 1 Mr. Jamón y queso,1 Mr. Arequipe
                            </b-card-text>

                        </b-col>
                        <b-col md="4">
                            <b-button variant="primary">Comprar</b-button>

                        </b-col>

                    </b-row>

             
                </b-card>
                <b-card>
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img
                                :src="require('./assets/suculento.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 25rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            title="Jugo de Maracuya">
                            <h1>Suculento</h1>
                               3 Jugos naturales, 3 Mr. Jamón y queso, 2 Mr. Chorizo, 1 Mr. Arequipe.
                            </b-card-text>

                        </b-col>
                        <b-col md="4">
                            <b-button variant="primary">Comprar</b-button>

                        </b-col>

                    </b-row>

             
                </b-card>
            </div>
        </div>

    </b-container>
    
  


  </div>


</template>
