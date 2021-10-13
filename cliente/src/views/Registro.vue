<template>
  <div class="container mt-5">
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ mensaje.texto }}
    </b-alert>

    <!-- Formulario Agregar -->
    <form @submit.prevent="agregarUsuario()" v-if="agregar">
      <v-card width="500" class="mx-auto">
        <br />
        <h4 class="text-center">
          Crea un nuevo usuario en <br />
          <strong>Mr.Empanada</strong>
        </h4>
        <div class="container mt-5">
          <h6 class="text-sm-left">Nombre Completo</h6>
          <input
            type="text"
            placeholder="Ingrese un Nombre"
            class="form-control my-2"
            v-model="usuario.nombre"
          />
          <h6 class="text-sm-left">Correo Electrónico</h6>
          <input
            type="text"
            placeholder="Ingrese una dirección de e-mail"
            class="form-control my-2"
            v-model="usuario.email"
          />
          <h6 class="text-sm-left">Telefono</h6>
          <input
            type="text"
            placeholder="Ingrese un numero de telefono"
            class="form-control my-2"
            v-model="usuario.telefono"
          />
        </div>
        <div class="container mt-4 text-center">
          <b-button class="btn-block btn-success" type="submit"
            >Agregar</b-button
          >
          <br />
          <br />
        </div>
      </v-card>
    </form>

    <!-- Formulario edicion -->
    <form @submit.prevent="editarUsuario(usuarioEditar)" v-else>
      <v-card width="500" class="mx-auto">
        <h3 class="text-center">
          Editar Usuario <br />
          <strong>Mr.Empanada</strong>
        </h3>
        <div class="container mt-5">
          <h6 class="text-sm-left">Nombre Completo</h6>
          <input
            type="text"
            class="form-control my-2"
            v-model="usuarioEditar.nombre"
          />
          <h6 class="text-sm-left">Correo Electrónico</h6>
          <input
            type="text"
            class="form-control my-2"
            v-model="usuarioEditar.email"
          />
          <h6 class="text-sm-left">Telefono</h6>
          <input
            type="text"
            class="form-control my-2"
            v-model="usuarioEditar.telefono"
          />
        </div>
        <div class="container mt-4 text-center">
          <b-row class="mt-5">
            <b-col>
              <b-button class="btn-block btn-warning" type="submit"
                >Editar</b-button
              >
            </b-col>

            <b-col>
              <b-button class="btn-block" @click="agregar = true"
                >Cancelar</b-button
              >
              <br /><br />
            </b-col>
          </b-row>
        </div>
      </v-card>
    </form>

    <div class="container mt-5 mx-auto text-center">
      <a href="#Tabla">
        <b-button variant="danger">Ver Usuarios</b-button>
      </a>
      <br /><br /><br />
    </div>

    <h2 id="Tabla" class="text-center mt-5">
      Usuarios <strong>Mr.Empanada</strong>
    </h2>
    <br /><br />
    <v-card width="800" class="mx-auto mt-9">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in usuarios" :key="index">
            <td>{{ item.nombre }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.telefono }}</td>
            <td>
              <b-button
                class="btn-warning btn-sm mx-2"
                @click="activarEdicion(item._id)"
                >Actualizar</b-button
              >
              <b-button
                class="btn-danger btn-sm mx-2"
                @click="eliminarUsuario(item._id)"
                >Eliminar</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>
    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,

      usuarios: [],
      usuario: { nombre: "", email: "", telefono: "" },
      agregar: true,
      editar: false,
      usuarioEditar: {},
    };
  },

  created() {
    this.listarUsuarios();
  },

  methods: {
    listarUsuarios() {
      this.axios
        .get("/usuario")
        .then((res) => {
          console.log(res.data);
          this.usuarios = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    agregarUsuario() {
      this.axios
        .post("/nuevo-usuario", this.usuario)
        .then((res) => {
          // Agrega al inicio de nuestro array usuario
          this.usuario.push(res.data);
          this.usuario.nombre = "";
          this.usuario.email = "";
          this.usuario.telefono = "";
          // Alerta de mensaje
          this.mensaje.texto = "Usuario Agregado!";
          this.mensaje.color = "success";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response.data.error.errors.nombre.message);
          // Alerta de mensaje
          this.showAlert();
          this.mensaje.color = "danger";
          this.mensaje.texto = e.response.data.error.errors.nombre.message;
        });
      this.usuario = {};
    },

    eliminarUsuario(id) {
      this.axios
        .delete(`usuario/${id}`)
        .then((res) => {
          let index = this.usuarios.findIndex(
            (item) => item._id === res.data._id
          );
          this.usuarios.splice(index, 1);
          this.showAlert();
          this.mensaje.texto = "Usuario Eliminado!";
          this.mensaje.color = "danger";
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.agregar = false;
      this.editar = true;

      this.axios
        .get(`/usuario/${id}`)
        .then((res) => {
          this.usuarioEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarUsuario(item) {
      this.axios
        .put(`/usuario/${item._id}`, item)
        .then((res) => {
          let index = this.usuarios.findIndex(
            (itemUsuario) => itemUsuario._id === this.usuarioEditar._id
          );
          this.usuarios[index].nombre = res.data.nombre;
          this.usuarios[index].email = res.data.email;
          this.usuarios[index].telefono = res.data.telefono;
          this.usuarioEditar = {};
          this.mensaje.texto = "Usuario Actualizado";
          this.mensaje.color = "success";
          this.showAlert();
          this.agregar = true;
          this.editar = false;
        })
        .catch((e) => {
          console.log(e);
        });
      this.agregar = true;
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>