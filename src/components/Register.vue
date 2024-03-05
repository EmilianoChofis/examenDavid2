<script setup>

</script>

<template>
  <div>
    <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Register a book"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="checkFormValidity" @submit="handleSubmit">
        <b-alert variant="danger" dismissible :show="errors.length > 0">
          <b>{{
              errors.length > 1
                  ? "Please correct the following errors:"
                  : "Please correct the following error:"
            }}</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </b-alert>
        <b-form-group
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required"
        >
          <b-form-input
              id="name-input"
              v-model="form.name"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Author" label-for="author-input">
          <b-form-input
          id="author-input"
          v-model="form.author"
          required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Cover Image" label-for="coverImage-input">
          <b-form-input
          id="coverImage-input"
          v-model="form.coverImage"
          required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            id="publicationDate"
            label="Publication Date"
            label-for="publicationDate"
        >
          <b-form-input
              id="publicationDate"
              v-model="form.publicationDate"
              type="date"
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import {saveBook} from "@/services/moviesFunctions";

export default {
  data() {
    return {
      form: {
        name: "",
        author: "",
        publicationDate: "",
        coverImage:""
      },
      errors: []
    }
  },
  methods:{
    checkFormValidity(){
      this.errors = [];
      if (!this.form.name) {
        this.errors.push("Name is required.");
      }
      if (!this.form.author) {
        this.errors.push("Author is required.");
      }
      if (!this.form.publicationDate) {
        this.errors.push("Publication Date is required.");
      }

      if (!this.form.coverImage) {
        this.errors.push("Cover Image is required.");
      }

    },
    resetModal(){
      this.form.name = "";
      this.form.author = "";
      this.form.publicationDate = "";
      this.form.coverImage = "";
      this.errors = [];
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    async handleSubmit() {
      this.checkFormValidity();
      if (this.errors.length > 0) {
        return
      }
      try {
        const response = await saveBook(this.form);
        this.$bvModal.hide('modal-prevent-closing')
        this.$v?.$reset();
      }catch (e){
        console.log(e);
      }
    }
  }
}
</script>