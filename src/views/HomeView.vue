<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import MoviesCard from "@/components/MoviesCard.vue";
import Carousel from "@/components/Carousel.vue";
import Register from "@/components/Register.vue";
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <Carousel/>
      </div>
      <div class="row">
        <div class="col-10">
          <MoviesCard/>
        </div>
        <div class="col-2">
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
