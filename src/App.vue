<script setup lang="ts">
  import StoneToLbs from "./components/StoneToLbs.vue";
</script>

<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="mr-2">Weight Converter</span>
          <font-awesome-icon icon="fa-solid fa-weight-scale" />
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/"> Home </a>
        </div>
      </div>
    </nav>
  </header>
  <div class="section">
    <div class="container">
      <StoneToLbs></StoneToLbs>
    </div>
  </div>
</template>

<style scoped></style>
