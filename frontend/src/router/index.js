import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//importamos nuestro componenete creado en fronted/Libro/ListaLibro.vue
import ListaLibro from '@/components/Libro/ListaLibro'
import EditarLibro from '@/components/Libro/EditarLibro'
import EliminarLibro from '@/components/Libro/EliminarLibro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/libros',
      name: 'ListaLibro',
      component: ListaLibro
    },
    {
      path: '/libros/:libroId/editar',
      name: 'EditarLibro',
      component: EditarLibro
    },
    {
      path: '/libros/:libroId/eliminar',
      name: 'EliminarLibro',
      component: EliminarLibro
    }
  ],
  mode: 'history'
})
