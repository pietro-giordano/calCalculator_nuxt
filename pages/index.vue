<template>
      <div class="flex flex-col items-center">
            <div class="text-xl uppercase mb-5 flex flex-col items-center">
                  Benvenuto
                  <span v-if="auth.user">{{ auth.user.name }}</span>
            </div>

            <div>
                  <nuxt-link to="/login" v-if="!auth.isLoggedIn">
                        <Button content="Login" class="bg-red-600 border-red-600 text-white focus:ring-red-200" />
                  </nuxt-link>
            </div>
      </div>

      <div class="container px-20 py-20 grid grid-cols-2 gap-4 uppercase" v-if="auth.isLoggedIn">
            <NuxtLink to="/recipes/search" class="border-2 border-red-500 bg-red-200 p-6 text-center">
                  Ricette
            </NuxtLink>

            <NuxtLink to="/ingredients/search" class="border-2 border-red-500 bg-red-200 p-6 text-center">
                  Ingredienti
            </NuxtLink>

            <NuxtLink to="/recipes/create" class="border-2 border-red-500 bg-red-200 p-6 text-center">
                  Aggiungi ricetta
            </NuxtLink>

            <NuxtLink to="/ingredients/create" class="border-2 border-red-500 bg-red-200 p-6 text-center">
                  Aggiungi ingrediente
            </NuxtLink>
      </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();
</script>



<style></style>
