export type Ingredient = {
    id: number
    name: string
    brand?: string
    caloriesPer100g?: number
    fatPer100g?: number
    carbohydratesPer100g?: number
    proteinPer100g?: number
    fiberPer100g?: number
    saturatedFatPer100g?: number
}

export type RecipeIngredient = {
    ingredient: Ingredient
    weightG: number
}

export type RecipeStep = {
    stepNumber: number
    instruction: string
}

export type Recipe = {
    id: number
    name: string
    cookedWeightG?: number
    ingredients: RecipeIngredient[]
    steps: RecipeStep[]
}