<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";

const inputStones = ref(null);
const inputPounds = ref(null);
const outputPounds = computed(() => {
  return (inputStones.value ?? 0) * 14 + (inputPounds.value ?? 0);
});
const outputKilograms = computed(() => {
  return outputPounds.value * 0.45359237;
});
</script>

<template>
  <h1 class="title">Stone and Pounds to Pounds/Kilograms</h1>
  <div class="field">
    <label class="label">Stones</label>
    <div class="control">
      <input v-model="inputStones" class="input" type="number" />
    </div>
  </div>
  <div class="field">
    <label class="label">Pounds</label>
    <div class="control">
      <input v-model="inputPounds" class="input" type="number" step="0.1" max="13.9" />
    </div>
  </div>
  <hr class="mt-6 mb-6" />
  <div class="field">
    <label class="label">Total Pounds</label>
    <div class="control">
      <input v-model="outputPounds" class="input" type="number" readonly />
    </div>
  </div>
  <div class="field">
    <label class="label">Kilograms</label>
    <div class="control">
      <input v-model="outputKilograms" class="input" type="number" readonly />
    </div>
  </div>
</template>


<style scoped>

</style>
