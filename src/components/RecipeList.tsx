
import RecipeCard from './RecipeCard'
import type { Recipe } from '../types/recipe'

function RecipeList({ recipes }: { recipes: Recipe[] }) {
    // Render all the recipes in a neat grid

    return (
        <section>
            <h2>Reseptit</h2>

            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                    />
                ))}
            </div>
        </section>
    )
}

export default RecipeList
