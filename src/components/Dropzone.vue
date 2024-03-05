<script setup>

</script>

<template>
  <div class="droppable" @drop="onDrop" @dragover.prevent></div>

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
      alert('¡Elemento soltado!');
    }
  }
};
</script>

<style>

.droppable {
  background-color: #e0e0e0;
  border: 2px dashed #aaa;
  height: 100px;
  margin-top: 10px;
}
</style>