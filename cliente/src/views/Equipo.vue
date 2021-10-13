<template>
  <b-container>
    <section class="equipo empanada mt-5">
      <div class="tripulante">
        <b-img
          :src="require('../assets/fredy2.jpg')"
          class="imagen-equipo"
          alt="Imagen de Fredy"
        ></b-img>
        <br /><br />
        <h2 class="nombre fredy">Jhon Fredy Ospina Galeano</h2>
        <h4 class="nombre">Scrum Master</h4>
        <hr />
        <p>
          Ingeniero Físico egresado de la UTP, he trabajado en la rama de
          caracterización de materiales y estudio de películas delgadas, en el
          futuro me gustaría llevar estos conocimientos hacia aplicaciones en
          energías renovables o ciencias de la salud. <br /><br />
          Soy un apasionado por la música, el ajedrez y la observación de aves.
        </p>
      </div>
      <div class="tripulante">
        <b-img
          :src="require('../assets/fredy2.jpg')"
          class="imagen-equipo"
          alt="Imagen de Fredy"
        ></b-img>
        <br /><br />
        <h2 class="nombre Yeison">Yeison Armando Buitrago Lopez</h2>
        <h4 class="nombre">Product Owner</h4>
        <hr />
        <p>
          Estudiante de ingeniería electrónica de la Universidad Nacional, a lo
          largo de mi carrera me he visto interesado por los circuitos y su
          estrecho vínculo con la programación. Por esta razón considero que
          adquirir buenos conocimientos en ambas áreas me ayudarán a desarrollar
          dispositivos inteligentes que planteen soluciones simples a problemas
          cotidianos.
        </p>
      </div>
      <div class="tripulante">
        <b-img
          :src="require('../assets/fredy2.jpg')"
          class="imagen-equipo"
          alt="Imagen de Fredy"
        ></b-img>
        <br /><br />
        <h2 class="nombre Mario">Mario Fernando Acosta Alvarez</h2>
        <h4 class="nombre">Develop Team</h4>
        <hr />
        <p>
          Tecnólogo en Alimentos de la universidad del valle, con experiencia en
          el área de producción y calidad de alimentos, desempeñó múltiples
          cargos en el área de auditoría de gestión de calidad. <br /><br />
          Emprendedor a partir del año 2017 y hasta la fecha con su restaurante
          Mister empanada ubicado en la ciudad de Cali.
        </p>
      </div>
    </section>
  </b-container>
</template>

<style>
p {
  text-align: justify;
}
.equipo {
  margin: 0 auto;
}
.imagen-equipo {
  max-width: 250px;
  border-radius: 15px;
}
.empanada {
  display: flex;
}
.nombre {
  text-align: center;
}
.tripulante {
  background: rgb(73, 138, 235);
  border: 1px solid #333;
  margin: 20px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 3px 3px 2px darkblue;
}
</style>