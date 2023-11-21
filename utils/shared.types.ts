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
      fibers?: number,
      [key: string]: string | number | Blob | undefined  // indice di tipo: dice a typecript che le chiavi dell'oggetto possono essere di tipo stringa e il tipo di valore che possono accettare
}