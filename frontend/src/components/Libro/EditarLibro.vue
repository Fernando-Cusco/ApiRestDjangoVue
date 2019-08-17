<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Editar Libro</h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @onsubmit="onSubmit">

              <div class="form-group row">
                <label for="title" class="col-sm-2-form-label">Título</label>
                <div class="col-sm-6">
                  <input type="text" placeholder="Título" name="title" class="form-control" v-model.trim="form.title">
                </div>
              </div>

              <div class="form-group row">
                <label for="description" class="col-sm-2-form-label">Descripción</label>
                <div class="col-sm-6">
                  <textarea type="text" placeholder="Descripción" name="description" class="form-control" row="3" v-model.trim="form.description"></textarea>
                </div>
              </div>
              <div class="rows">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">Editar</b-button>
                  <b-button type="submit" class="btn-large-space" variant="primary" :to="{ name: 'ListaLibro' }">Cancelar</b-button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        libroId: this.$route.params.libroId,                            //Obtenemos el id del libro
        form: {
          title: '',
          description: ''
        }
      }
    },
    methods:{
      onSubmit(evt){
        evt.preventDefault()
      },
    getLibro(){
      const path = `http://localhost:8000/api/v1.0/libros/`+this.libroId+`/`
      axios.get(path).then((response) => {                                      //hacemos la peticion
        this.form.title = response.data.title
        this.form.description = response.data.description
      })
      .catch((error) =>{
        console.log(error);
      })
    }
  },
  created(){
    this.getLibro()
  }
  }
</script>

<style lang="css">
</style>
