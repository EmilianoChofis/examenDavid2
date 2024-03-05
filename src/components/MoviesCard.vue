<script setup>

</script>

<template>
  <div>
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
      <draggable v-for="book in books" :key="book.id" v-model="books" :options="dragOptions" @start="onDragStart" @end="onDragEnd(book)">

        <b-col   >
          <b-card
              :class="{shake:disabled}"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
              :border-variant="
						book.status === true ? 'success' : 'danger'
					"

          >
            <b-card-text>
              <br>
              {{ book.name }}
              <br>
              {{ book.author }}
              <br>
              {{ book.publicationDate }}
            </b-card-text>
          </b-card>
        </b-col>

      </draggable>


  </div>

</template>

<script>
import {deleteBook, getBooks, orderByAuthor, orderByImage, orderByPublication} from "@/services/moviesFunctions";
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },

  data(){
    return{
      books: [],
      disabled: false,
      dragOptions: {
        animation: 150
      },
      bookId: ""

    }
  },
  mounted(){
    this.getBooks();
    this.warnDisabled();
  },
  methods:{
    onDragStart(event) {
      console.log('Drag start:', event);
    },
    onDragEnd(book) {
      const response = deleteBook(book.id);
      //recargar pagina
      this.getBooks();

    },
    async getBooks(){
      this.books = await getBooks();
    },
    warnDisabled(){
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 3000);
    },
    async autorFind(){
      this.books = await orderByAuthor();
    },
    async publicationFind(){
      this.books = await orderByPublication();
    },
    async imagenFind(){
      this.books = await orderByImage();
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