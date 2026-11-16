import type { Recipe } from "../types/recipe";

export type Nutrition = {
    calories: number
    fat: number
    saturatedFat: number
    carbohydrates: number
    fiber: number
    protein: number
}

// Calculates the total weight of all the ingredients used in the recipe. Gives us the weight before baking/frying/etc. 
// Returns a numeral value
export function calculateRawWeight(recipe: Recipe): number {
    return recipe.ingredients.reduce((total, item) => total + item.weightG, 0)
}

// Calculates the total amount of calories and macros in this recipe
// Returns a list of nutrition values
export function calculateNutrition(recipe: Recipe): Nutrition {
    let calories = 0
    let fat = 0
    let saturatedFat = 0
    let carbohydrates = 0
    let fiber = 0
    let protein = 0

    for (const item of recipe.ingredients) {
        const ingredient = item.ingredient
        const weight = item.weightG

        calories += ((ingredient.caloriesPer100g ?? 0) / 100) * weight
        fat += ((ingredient.fatPer100g ?? 0) / 100) * weight
        saturatedFat += ((ingredient.saturatedFatPer100g ?? 0) / 100) * weight
        carbohydrates += ((ingredient.carbohydratesPer100g ?? 0) / 100) * weight
        fiber += ((ingredient.fiberPer100g ?? 0) / 100) * weight
        protein += ((ingredient.proteinPer100g ?? 0) / 100) * weight
    }

    return { calories, fat, saturatedFat, carbohydrates, fiber, protein}
}

// Calculates the calories and macros for a recipe per 100 grams of finished food
// Returns null or a list of nutrition values
export function calculateNutritionPer100g(nutrition: Nutrition, rawWeightG: number, cookedWeightG?: number): Nutrition | null {
    // use raw weight if no cooked weight is given
    const weightForCalculation = cookedWeightG ?? rawWeightG

    // don't calculate if no weight was given or it's negative for whatever reason
    if (weightForCalculation <= 0) {
        return null
    }

    const multiplier = 100 / weightForCalculation

    return {
        calories: nutrition.calories * multiplier,
        fat: nutrition.fat * multiplier,
        saturatedFat: nutrition.saturatedFat * multiplier,
        carbohydrates: nutrition.carbohydrates * multiplier,
        fiber: nutrition.fiber * multiplier,
        protein: nutrition.protein * multiplier
    }
}