<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Lista de libros</h2>
        <div class="col-md-12">
          <b-table striped hover :items="libros" :fields="fields">
            <template slot="action" slot-scope="data">
              <b-button size="sm" variant="primary" :to="{name:'EditarLibro', params: {libroId: data.item.id}}">
                Editar
              </b-button>
              <b-button size="sm" variant="danger" :to="{name:'EliminarLibro', params: {libroId: data.item.id}}">
                Eliminar
              </b-button>
            </template>
          </b-table>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      fields: [
        {key: 'title', label: 'Título'},
        {key: 'description', label: 'Descripción'},
        {key: 'action', label: ''}
      ],
      libros: []
    }
  },
  methods:{

    getLibros () {
      const path = 'http://localhost:8000/api/v1.0/libros/'
      axios.get(path).then((response) => {
        this.libros = response.data
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created () {
    this.getLibros()
  }
}
</script>
<style lang="css" scoped>
</style>
