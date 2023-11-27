<template>
      <form @submit.prevent="handleNewIngredient" class="container mt-8 mb-2 min-w-xs md:min-w-[672px] lg:min-w-[896px]">
            <div class="mb-10 pb-10 grid md:grid-cols-2 gap-6">
                  <CustomInput type="text" content="Nome" name="Nome" v-model="newIngredient.name" />

                  <CustomInput type="text" content="Marchio" name="Marchio" v-model="newIngredient.brand" />

                  <div class="relative h-32 w-full min-w-[200px] col-span-2">
                        <textarea id="Descrizione" v-model="newIngredient.description"
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
                        v-model="newIngredient[info.property]" />
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
            property: 'calories_hundred_grams'
      }, {
            content: 'Grassi',
            type: 'number',
            property: 'fats_hundred_grams'
      }, {
            content: 'Grassi saturi',
            type: 'number',
            property: 'saturated_fats_hundred_grams'
      }, {
            content: 'Proteine',
            type: 'number',
            property: 'proteins_hundred_grams'
      }, {
            content: 'Carboidrati',
            type: 'number',
            property: 'carbs_hundred_grams'
      }, {
            content: 'Zuccheri',
            type: 'number',
            property: 'sugars_hundred_grams'
      }, {
            content: 'Fibre',
            type: 'number',
            property: 'fibers_hundred_grams'
      }
]);

const newIngredient = ref<Ingredient>({
      name: '',
      brand: '',
      description: '',
      image: undefined,
      calories_hundred_grams: 0,
      fats_hundred_grams: 0,
      saturated_fats_hundred_grams: 0,
      proteins_hundred_grams: 0,
      carbs_hundred_grams: 0,
      sugars_hundred_grams: 0,
      fibers_hundred_grams: 0,
      personally_created: true,
});

async function handleNewIngredient() {
      await useApiFetch('/api/ingredients', {
            method: 'POST',
            body: newIngredient.value,
            onResponse({ response }) {
                  if (response.status == 200) {
                        newIngredient.value.name = '';
                        newIngredient.value.brand = '';
                        newIngredient.value.description = '';
                        newIngredient.value.calories_hundred_grams = 0;
                        newIngredient.value.fats_hundred_grams = 0;
                        newIngredient.value.saturated_fats_hundred_grams = 0;
                        newIngredient.value.proteins_hundred_grams = 0;
                        newIngredient.value.carbs_hundred_grams = 0;
                        newIngredient.value.sugars_hundred_grams = 0;
                        newIngredient.value.fibers_hundred_grams = 0;
                        console.log("inserimento effettuato con successo")
                  } else {
                        const { _data } = response;
                        const { errors } = _data;
                        for (let x in errors) {
                              console.log(errors[x])
                        }
                  }
            },
      })

      // console.log(data.value)
      // console.log(errors)

      // if (typeof data.value === 'object' && data.value !== null) {
      //       // Usa un type casting per informare TypeScript sul tipo dell'oggetto
      //       const typedValue = data.value as { success: boolean, message: string };

      //       // Ora puoi accedere alle proprietà dell'oggetto con sicurezza
      //       if (typedValue.success === true) {
      //             newIngredient.value.name = '',
      //                   newIngredient.value.brand = '',
      //                   newIngredient.value.description = '',
      //                   newIngredient.value.calories_hundred_grams = 0,
      //                   newIngredient.value.fats_hundred_grams = 0,
      //                   newIngredient.value.saturated_fats_hundred_grams = 0,
      //                   newIngredient.value.proteins_hundred_grams = 0,
      //                   newIngredient.value.carbs_hundred_grams = 0,
      //                   newIngredient.value.sugars_hundred_grams = 0,
      //                   newIngredient.value.fibers_hundred_grams = 0,

      //                   console.log(typedValue.message)
      //       }
      // } else {
      //       const typedValue = errors as { data: any };
      //       // Tratta il caso in cui data.value non sia un oggetto
      //       console.error('data.value non è un oggetto valido');
      // }
}
</script>

<style></style>
