<script setup>

</script>

<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
          v-for="book in books" :key="book.id"
          :caption="book.name"
          img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import {getBooks} from "@/services/moviesFunctions";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      books: [],
    }
  },mounted() {
    this.getBooks();
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    async getBooks(){
      this.books = await getBooks();
    }
  }
}
</script>

