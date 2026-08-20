import RecipeCard from './RecipeCard'

type Recipe = {
    id: number,
    name: string,
    cookedWeight: number,
    caloriesPer100g: number,
}

type RecipeListProps = {
    recipes: Recipe[]
}

function RecipeList({recipes}: RecipeListProps) {
    // Render a neat grid of recipe cards using the recipes from the props given by app.
    //console.log(recipes)

    return (
        <section>
            <h2>Reseptit</h2>
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard 
                        key={recipe.id}
                        name={recipe.name}
                        cookedWeight={recipe.cookedWeight}
                        caloriesPer100g={recipe.caloriesPer100g}
                    />
                ))}
            </div>
        </section>
    )

}

export default RecipeList