<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Lista de libros</h2>
        <div class="col-md-12">
          <b-table striped hover :items="libros" :fields="fields">

          </b-table>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {key: 'title', label: 'Título'},
        {key: 'description', label: 'Descripción'},
        {key: 'action', label: 'Acción'}
      ],
      libros: []
    }
  }
}
</script>
<style lang="css" scoped>
</style>
