<script setup>

</script>

<template>
  <div class="droppableDel" @drop="onDrop" @dragover.prevent></div>

</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  data() {
    return {
      dragOptions: {
        animation: 150
      }
    };
  },
  methods: {

    onDrop(event) {

    }
  }
};
</script>

<style>

.droppableDel {
  background-color: red;
  border: 2px dashed #aaa;
  height: 100px;
  margin-top: 10px;
}
</style>