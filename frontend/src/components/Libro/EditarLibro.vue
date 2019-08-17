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
                  <input type="text" placeholder="Título" name="title" class="form-control">
                </div>
              </div>

              <div class="form-group row">
                <label for="description" class="col-sm-2-form-label">Descripción</label>
                <div class="col-sm-6">
                  <textarea type="text" placeholder="Descripción" name="description" class="form-control" row="3"></textarea>
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
  export default {

  }
</script>

<style lang="css">
</style>
