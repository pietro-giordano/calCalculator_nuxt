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