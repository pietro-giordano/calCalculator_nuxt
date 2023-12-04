interface GeneralInfo {
      name: string,
      brand: string,
      description?: string,
      image?: Blob,
      personally_created: boolean,
}

interface NutInfoHundred {
      calories_hundred_grams?: number,
      fats_hundred_grams?: number,
      saturated_fats_hundred_grams?: number,
      proteins_hundred_grams?: number,
      carbs_hundred_grams?: number,
      sugars_hundred_grams?: number,
      fibers_hundred_grams?: number,
}

interface NutInfoTotal {
      calories_total: number,
      fats_total: number,
      saturated_fats_total: number,
      proteins_hundred_total: number,
      carbs_hundred_total: number,
      sugars_hundred_total?: number,
      fibers_hundred_total?: number,
}

interface Ingredient extends GeneralInfo, NutInfoHundred {
      [key: string]: string | number | boolean | Blob | undefined  // indice di tipo: dice a typecript che le chiavi dell'oggetto possono essere di tipo stringa e il tipo di valore che possono accettare
}

interface Recipe extends GeneralInfo, NutInfoHundred, NutInfoTotal {
      weight_total: number,
      servings: number,
      counter_views: number,
      [key: string]: string | number | boolean | Blob | undefined  // indice di tipo: dice a typecript che le chiavi dell'oggetto possono essere di tipo stringa e il tipo di valore che possono accettare
}