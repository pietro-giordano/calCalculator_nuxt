<template>
      <form @submit.prevent="handleNewIngredient" class="container mt-8 mb-2 min-w-xs md:min-w-[672px] lg:min-w-[896px]">
            <div class="mb-10 pb-10 grid md:grid-cols-2 gap-6">
                  <CustomInput type="text" content="Nome" name="Nome" v-model="newIngredient.name" />

                  <CustomInput type="text" content="Marchio" name="Marchio" v-model="newIngredient.brand" />

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
                  <CustomInput :type="info.type" v-for="info in nutritionalInfo" :content="info.content" :name="info.content"
                        v-model="info.newIngredientProperty" />
            </div>

            <div>
                  <Button1 content="Salva e crea" type="submit" />
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
            type: 'number',
            newIngredientProperty: 'newIngredient.calories'
      }, {
            content: 'Grassi',
            type: 'number',
            newIngredientProperty: 'newIngredient.fats'
      }, {
            content: 'Grassi saturi',
            type: 'number',
            newIngredientProperty: 'newIngredient.saturatedFats'
      }, {
            content: 'Proteine',
            type: 'number',
            newIngredientProperty: 'newIngredient.proteins'
      }, {
            content: 'Carboidrati',
            type: 'number',
            newIngredientProperty: 'newIngredient.carbs'
      }, {
            content: 'Zuccheri',
            type: 'number',
            newIngredientProperty: 'newIngredient.sugars'
      }, {
            content: 'Fibre',
            type: 'number',
            newIngredientProperty: 'newIngredient.fibers'
      }
]);

const newIngredient = ref<Ingredient>({
      name: '',
      brand: '',
      description: '',
      image: undefined,
      calories: 0,
      fats: 0,
      saturatedFats: 0,
      proteins: 0,
      carbs: 0,
      sugars: 0,
      fibers: 0
});

async function handleNewIngredient() {
      console.log(newIngredient);
}
</script>

<style></style>
