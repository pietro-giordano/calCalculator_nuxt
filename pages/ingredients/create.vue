<template>
      <form class="container mt-8 mb-2 min-w-xs md:min-w-[672px] lg:min-w-[896px]">
            <div class="mb-10 pb-10 grid md:grid-cols-2 gap-6">
                  <InputText type="text" content="Nome" name="Nome" />

                  <InputText type="text" content="Marchio" name="Marchio" />

                  <div class="relative h-32 w-full min-w-[200px] col-span-2">
                        <textarea id="Descrizione"
                              class="h-full w-full rounded-md border-2 border-pink-500 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0"
                              placeHolder=" "></textarea>
                        <label for="Descrizione"
                              class="absolute p-1 left-3 -top-[11px] flex bg-white text-[11px] font-normal leading-tight text-pink-500">
                              Descrizione
                        </label>
                  </div>

                  <div class="h-11 w-full min-w-[200px]">
                        <input type="file" id="image" class="hidden">
                        <label for="image"
                              class="py-2 px-4 border-2 cursor-pointer border-pink-500 text-white uppercase bg-pink-400 font-normal text-pink-500 rounded-3xl">
                              carica immagine o foto
                        </label>
                  </div>
            </div>

            <div class="mb-4 grid md:grid-cols-4 gap-6">
                  <InputText :type="info.type" v-for="info, index in nutritionalInfo" :content="info.content"
                        :name="info.content" v-model="newIngredient['name']" />
            </div>
      </form>
</template>
      
<script lang="ts" setup>
import { definePageMeta } from '#imports';

definePageMeta({
      middleware: ['auth']
});

const nutritionalInfo = ref([
      {
            content: 'Calorie',
            type: 'number'
      }, {
            content: 'Grassi',
            type: 'number'
      }, {
            content: 'Grassi saturi',
            type: 'number'
      }, {
            content: 'Proteine',
            type: 'number'
      }, {
            content: 'Carboidrati',
            type: 'number'
      }, {
            content: 'Zuccheri',
            type: 'number'
      }, {
            content: 'Fibre',
            type: 'number'
      }
]);

type Ingredient = {
      name: string,
      brand: string,
      description?: string,
      image?: Blob,
      calories: number,
      fats: number,
      saturatedFats: number,
      proteins: number,
      carbs: number,
      sugars?: number,
      fibers?: number
}
const newIngredient = ref<Ingredient>();
</script>

<style></style>
