import RecipeCard from './RecipeCard'
import type { Recipe } from '../types/recipe'

function RecipeList({ recipes }: { recipes: Recipe[] }) {
    // Render a neat grid of recipe cards using the recipes from the props given by app.
    //console.log(recipes)

    return (
        <section>
            <h2>Reseptit</h2>

            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard 
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.name}
                        cookedWeightG={recipe.cookedWeightG}
                    />
                ))}
            </div>
        </section>
    )

}

export default RecipeList