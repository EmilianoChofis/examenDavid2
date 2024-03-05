<script setup>

</script>

<template>
  <div>
    <b-row>
      <b-col v-for="book in books" :key="book.id">
        <b-card
            :class="{shake:disabled}"
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
          <b-card-text>
            {{ book.name }}
            <br>
            {{ book.author }}
            <br>
            {{ book.publicationDate }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

  </div>

</template>

<script>
import {getBooks} from "@/services/moviesFunctions";
export default {
  data(){
    return{
      books: [],
      disabled: false

    }
  },
  mounted(){
    this.getBooks();
    this.warnDisabled();
  },
  methods:{
    async getBooks(){
      this.books = await getBooks();
      this.books.publicationDate = new Date(this.books.publicationDate).toISOString().split('T')[0];
    },
    warnDisabled(){
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>
  .shake {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  }
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>