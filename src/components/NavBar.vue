<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink to="/" class="nav-link ms-5">｡◕ ‿ ◕｡</RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto pe-5">
          <RouterLink to="/" class="nav-link">Inicio</RouterLink>
          <RouterLink :to="{ name: about }" class="nav-link">Sobre nosotros</RouterLink>
          <RouterLink :to="{ name: counter }" class="nav-link">Contador</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
