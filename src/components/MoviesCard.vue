<script setup>

</script>

<template>
  <div>
    <b-row>
      <b-col v-for="book in books" :key="book.id">
        <b-card
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

    }
  },
  mounted(){
    this.getBooks();
  },
  methods:{
    async getBooks(){
      this.books = await getBooks();
      this.books.publicationDate = new Date(this.books.publicationDate).toISOString().split('T')[0];
    }
  }
}
</script>