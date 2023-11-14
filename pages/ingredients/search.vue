<template>
      <div>

            <form @submit.prevent="searchIngredients">
                  <input v-model="search" type="text" class="border-2 border-red-500 p-2 rounded-lg me-4"
                        placeholder="Cerca ingrediente">

                  <Button1 content="Cerca" type="submit" />
            </form>

            <div>
                  <ul>
                        <li>
                              {{ }}
                        </li>
                  </ul>
            </div>

      </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { definePageMeta } from '#imports';

definePageMeta({
      middleware: ['auth']
});

const search = ref();

async function searchIngredients() {
      const { data: result } = await useFetch('https://world.openfoodfacts.net/api/v2/search?brands_tag=ferrero&fields=product_name_it,product_name,nutriments');

      console.log(result);
}
</script>

<style></style>