<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";

const inputStones = ref(0);
const inputPounds = ref(0.0);
const outputPounds = computed(() => {
  return inputStones.value * 14 + inputPounds.value;
});
</script>

<template>
  <h1 class="title">Stone and Pounds to Pounds</h1>
  <div class="field">
    <label class="label">Stones</label>
    <div class="control">
      <input v-model="inputStones" class="input" type="number" />
    </div>
  </div>
  <div class="field">
    <label class="label">Pounds</label>
    <div class="control">
      <input
        v-model="inputPounds"
        class="input"
        type="number"
        step="0.1"
        max="13.9"
      />
    </div>
  </div>
  <hr class="mt-6 mb-6"/>
  <div class="field">
    <label class="label">Total Pounds</label>
    <div class="control">
      <input v-model="outputPounds" class="input" type="number" readonly />
    </div>
  </div>
</template>

<style scoped></style>
