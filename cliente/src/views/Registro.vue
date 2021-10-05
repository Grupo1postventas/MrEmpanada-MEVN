<template>
  <div class="container">
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ mensaje.texto }}
    </b-alert>

    <form @submit.prevent="agregarUsuario()" v-if="agregar">
      <h3 class="text-center">Agregar nuevo usuario</h3>
      <input
        type="text"
        placeholder="Ingrese un Nombre"
        class="form-control my-2"
        v-model="usuario.nombre"
      />
      <input
        type="text"
        placeholder="Ingrese una descripcion"
        class="form-control my-2"
        v-model="usuario.descripcion"
      />
      <b-button class="btn-sm btn-block btn-success" type="submit"
        >Agregar</b-button
      >
    </form>

    <!-- Formulario edicion -->
    <form @submit.prevent="editarUsuario(usuarioEditar)" v-else>
      <h3 class="text-center">Editar Usuario</h3>
      <input
        type="text"
        placeholder="Ingrese un Nombre"
        class="form-control my-2"
        v-model="usuarioEditar.nombre"
      />
      <input
        type="text"
        placeholder="Ingrese una descripcion"
        class="form-control my-2"
        v-model="usuarioEditar.descripcion"
      />
      <b-button class="btn-sm btn-block mb-1 btn-warning" type="submit"
        >Editar</b-button
      >
      <b-button class="btn-sm btn-block" @click="agregar = true"
        >Cancelar</b-button
      >
    </form>

    <br /><br /><br />

    <h2 class="text-center">Tabla Usuarios</h2>
    <br /><br />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Fecha</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in usuarios" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.date }}</td>
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
      usuario: { nombre: "", descripcion: "" },
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
          this.usuario.nombre="";
          this.usuario.descripcion="";
          // Alerta de mensaje
          this.mensaje.texto = "Usuario Agregada!";
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
        .get(`usuario/${id}`)
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
            this.usuarios[index].descripcion = res.data.descripcion;
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