<template>
      <div>
            <h1>Benvenuto {{ auth.user }}</h1>

            <div>
                  <nuxt-link to="/login" v-if="!auth.isLoggedIn">
                        <button1 content="Login" />
                  </nuxt-link>
            </div>
      </div>

      <div class="container px-20 py-20" v-if="auth.isLoggedIn">
            <NuxtLink to="/recipes/create" class="border-2 border-red-500 bg-red-200 p-6">
                  Add new Recipe
            </NuxtLink>

            <NuxtLink to="/ingredients/create" class="border-2 border-red-500 bg-red-200 p-6">
                  Add new Ingredient
            </NuxtLink>
      </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();
</script>



<style></style>
