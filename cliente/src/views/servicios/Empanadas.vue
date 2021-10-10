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
         <b-button  href="/servicios/combos" variant ="primary">Combos</b-button>
       </b-car>

     </b-col>
     <b-col cols="12" md="6">
       <b-car>
         <b-button  href="/servicios/bebidas" variant ="primary">Bebidas</b-button>
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
                                :src="require('./assets/mrhawuania.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 25rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            class="center">
                            <h1>Mr. Hawaiana</h1>
                                Pefecta combinacioón de trozos de jamón de cerdo ahumado combinado con piña colada y queso doble crema. 

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
                                :src="require('./assets/mrjamonyqueso.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 25rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            title="Jugo de Maracuya">
                            <h1>Mr. Jamón y Queso</h1>
                                Trozos de jamón de cerdo ahumado combinado con delicioso queso crema. 

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
                                :src="require('./assets/mrchorizo.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 25rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            title="Jugo de Maracuya">
                            <h1>Mr. Chorizo</h1>
                                Exquisito chorizo de cerdo combinado con maiz tierno y delicioso queso crema.
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
