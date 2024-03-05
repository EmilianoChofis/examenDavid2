<template>
  <div>
    <draggable v-model="dragItems" :options="dragOptions" @start="onDragStart" @end="onDragEnd">
      <div v-for="(item, index) in dragItems" :key="index" class="drag-item">{{ item }}</div>
    </draggable>
    <div class="droppable" @drop="onDrop" @dragover.prevent></div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  data() {
    return {
      dragItems: ['Elemento 1', 'Elemento 2', 'Elemento 3'], // Elementos arrastrables
      dragOptions: {
        animation: 150
      }
    };
  },
  methods: {
    onDragStart(event) {
      console.log('Drag start:', event);
    },
    onDragEnd(event) {
      console.log('Drag end:', event);
    },
    onDrop(event) {
      alert('¡Elemento soltado!');
    }
  }
};
</script>

<style>
.drag-item {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  padding: 10px;
}

.droppable {
  background-color: #e0e0e0;
  border: 2px dashed #aaa;
  height: 100px;
  margin-top: 10px;
}
</style>
