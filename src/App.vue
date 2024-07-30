<template>
  <main class="min-h-screen max-w-lg mx-auto" :class="store.bgMain" >
    <header class="bg-slate-900 text-white py-2">
      <p class="absolute cursor-pointer" @click="$router.go(-1)" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </p>
      <h1 class="text-3x1 font-bold text-center">{{ $route.path === '/' ? 'AI Chat G' : 'Sophie' }}</h1>
    </header>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLocalStore } from './stores/local';

const store = useLocalStore()
</script>