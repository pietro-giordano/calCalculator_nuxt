<template>
      <div>

            <form @submit.prevent="searchIngredients">
                  <input v-model="search" type="text" class="border-2 border-red-500 p-2 rounded-lg me-4"
                        placeholder="Cerca ingrediente">

                  <Button content="Cerca" type="submit" />
            </form>

            <div>
                  <ul>
                        <li v-for="ingredient in ingredientList">
                              {{ ingredient.name }}
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

const ingredientList = ref<Ingredient[]>();

onBeforeMount(() => {
      useApiFetch('/api/ingredients', {
            onResponse({ response }) {
                  const { _data } = response;
                  const { ingredients } = _data;
                  ingredientList.value = ingredients;
            }
      });
      console.log(ingredientList);
});

const search = ref<string>();

async function searchIngredients() {
      const { data: result } = await useFetch('https://world.openfoodfacts.net/api/v2/search?brands_tag=ferrero&fields=product_name_it,product_name,nutriments');

      console.log(result);
}
</script>

<style></style>