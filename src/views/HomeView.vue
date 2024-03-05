<script setup >
import MoviesCard from "@/components/MoviesCard.vue";
import Carousel from "@/components/Carousel.vue";
import Register from "@/components/Register.vue";
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row" v-show="showCarousel">
        <Carousel/>
      </div>
      <div class="row">
        <div class="col-10">
          <div class="row mt-4">
           <div class="col">
             <b-button v-on:click="autorFind">
               <b-icon icon="filter" aria-hidden="true"></b-icon>
               Filtrar por autor
             </b-button>
           </div>
            <div class="col">
              <b-button v-on:click="publicationFind">
                <b-icon icon="filter" aria-hidden="true"></b-icon>
                Filtrar por fecha de publicacion
              </b-button>
            </div>
            <div class="col">
              <b-button v-on:click="imagenFind">
                <b-icon icon="filter" aria-hidden="true"></b-icon>
                Tiene imagen
              </b-button>
            </div>
          </div>
          <MoviesCard/>
        </div>
        <div class="col-2 mt-2">
          <div class="row">
            <b-button
                v-b-modal.modal-prevent-closing
                class="text-end"
            >
              <b-icon icon="plus-circle" aria-hidden="true"></b-icon>
              Registrar libro
            </b-button>
            <Register/>
          </div>
          <div class="row">
<!--dropzone de update            -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
      showCarousel: true
    }
  },
  methods:{
    autorFind(){
      console.log("autorFind")
    },
    publicationFind(){
      console.log("PublicationFind")
    },
    imagenFind(){
      console.log("imagenFind")
    }
  }
}
</script>