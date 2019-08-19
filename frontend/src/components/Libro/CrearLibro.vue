<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Crear un nuevo Libro</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">
              <div class="form-group row">
              <label for="title" class="col-sm-2-form-label">Título</label>
              <div class="col-sm-6">
                <input type="text" placeholder="Título" name="title" class="form-control" v-model.trim="form.title">
              </div>
              </div>
              <div class="form-group row">
              <label for="description" class="col-sm-2-form-control-label">Descripción</label>
              <div class="col-sm-6">
                <textarea type="text" placeholder="Descripción" name="description" class="form-control" rom="3" v-model.trim="form.description"></textarea>
              </div>
              </div>

              <div class="rows">
                <div class="col  text-left">
                  <b-button type="submit" variant="primary">Crear</b-button>
                  <b-button type="submit" class="btn-large-space" variant="primary" :to="{ name: 'ListaLibro'}">Cancelar</b-button>
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
import swal from 'sweetalert'

  export default {
    data(){
      return {
        form: {
          title: '',
          description: ''
        }
      }
      },
      methods: {
        onSubmit(evt){
          evt.preventDefault()
          const path = 'http://localhost:8000/api/v1.0/libros/'
          axios.post(path, this.form).then((response) =>{
            this.form.title = response.data.title
            this.form.description = response.data.description
            swal("Tu nuevo libro ha sido creado.", "", "success")
          })
          .catch((error) =>{
            swal("No se ha podido crear tu libro.", "", "error")
          })
        }
      },
      created(){
      }
    }

</script>
