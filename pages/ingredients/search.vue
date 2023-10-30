<template>
      <div>

            <form @submit.prevent="searchIngredients">
                  <input type="text" class="border-2 border-red-500 p-2 rounded-lg me-4" placeholder="Cerca ricetta">

                  <Button1 content="Cerca" type="submit" />
            </form>

            <div>
                  <ul>

                  </ul>
            </div>

      </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports';

definePageMeta({
      middleware: ['auth']
});

async function searchIngredients() {
      await useApiFetch("/api/");
}
</script>

<style></style>