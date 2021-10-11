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
        >  <h1>Bebidas</h1>
          <b-card-body>  
           
        <div>
          


      <b-container>
        <b-row class="mt-5">
     <b-col cols="12" md="6">
       <br>
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
                                :src="require('./assets/maracuya.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 15rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            class="center">
                            <h1>Jugo de Maracuya</h1>
                            <br>
                            <h2>Delicioso jugo natural de maracuya. </h2>
                                

                            </b-card-text>

                        </b-col>
                        <b-col md="4">
                           <b-button variant="primary">Comprar</b-button>

                        </b-col>

                    </b-row>

             
                </b-card>
                <br>
                <b-card>
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img
                                :src="require('./assets/limonada.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 15rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            title="Jugo de Maracuya">
                            <h1>Limonada</h1>
                                <h2>Deliciosa limonada natural.  </h2> 

                            </b-card-text>

                        </b-col>
                        <b-col md="4">
                            <b-button variant="primary">Comprar</b-button>

                        </b-col>

                    </b-row>

             
                </b-card>
                <br>
                <b-card>
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img
                                :src="require('./assets/capuchino.jpg')"  
                                alt="Image"  
                                class="rounded-0"
                                style="max-width: 15rem"
                                >
                                

                            </b-card-img>

                        </b-col>
                        <b-col md="4">
                            <b-card-text
                            title="Jugo de Maracuya">
                            <h1>Capuchino</h1>
                               <h2>Bebida caliente a base de café.</h2>   

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
