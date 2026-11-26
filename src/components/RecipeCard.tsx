import { Link } from 'react-router-dom'
import type { Recipe } from '../types/recipe'
import { calculateRawWeight, calculateNutrition, calculateNutritionPer100g } from '../utils/nutrition'


type RecipeCardProps = {
    recipe: Recipe
}

function RecipeCard({ recipe }: RecipeCardProps) {
    // Calculate the total nutrition of the recipe
    const totalNutrition = calculateNutrition(recipe)

    // Calculate the total weight of the ingredients
    const rawWeight = calculateRawWeight(recipe)

    // Calculate nutrition per 100 g, accounting for cooking weight if provided
    const nutritionPer100g = calculateNutritionPer100g(totalNutrition, rawWeight, recipe.cookedWeightG)

    return (
        <article className='recipe-card'>
            <h2><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></h2>

            <p>{nutritionPer100g ? `${Math.round(nutritionPer100g.calories)} kcal / 100 g` : 'Nutrition unavailable'}</p>
            <p>Entire recipe: {Math.round(totalNutrition.calories)} kcal</p>

            <button>Cook this!</button>
        </article>
    )
}

export default RecipeCard