<script setup >
import MoviesCard from "@/components/MoviesCard.vue";
import Carousel from "@/components/Carousel.vue";
import Register from "@/components/Register.vue";
import Dropzone from "@/components/Dropzone.vue";
import DropzoneDelete from "@/components/DropzoneDelete.vue";
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row" v-show="showCarousel">
        <Carousel/>
      </div>
      <div class="row">
        <div class="col-10">

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
            <div class="row">
              <Dropzone/>
            </div>
            <div class="row">
              <DropzoneDelete/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import {orderByAuthor} from "@/services/moviesFunctions";

export default {
  data(){
    return{
      showCarousel: true
    }
  },
  methods:{

  }
}
</script>