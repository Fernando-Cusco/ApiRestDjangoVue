<template lang="html">

  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Seguro quieres eliminar este libro?</h3>
        <p>Título: {{ this.element.title }}</p>
        <p>Descripción: {{ this.element.description }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-button v-on:click="eliminarLibro" variant="danger">Eliminar</b-button>
        <b-button type="submit" class="btn-large-space" variant="primary" :to="{ name: 'ListaLibro'}">Cancelar</b-button>
      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default{
  data(){
    return {
      libroId: this.$route.params.libroId,                            //Obtenemos el id del libro
      element: {
        title: '',
        description: ''
      }
    }
  },
  methods:{
    getLibro(){
      const path = `http://localhost:8000/api/v1.0/libros/`+this.libroId+`/`
      axios.get(path).then((response) => {
        this.element.title = response.data.title
        this.element.description = response.data.description
      })
      .catch((error) =>{
        console.log(error);
      })
    },
    eliminarLibro(){
      const path = `http://localhost:8000/api/v1.0/libros/`+this.libroId+`/`
      axios.delete(path).then((response) => {
      location.href = '/libros'
      })
      .catch((error) =>{
        swal("No se puedo eliminar el libro", "","error")
      })
    }
  },
  created(){
    this.getLibro()
  }
}
</script>
<style lang="css" scoped>
</style>
