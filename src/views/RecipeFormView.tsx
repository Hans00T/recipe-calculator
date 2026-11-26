import type { RecipeIngredient } from "../types/recipe"
import { ingredients } from "../data/recipes"
import { useState } from "react"

// the page where a new recipe is added

function RecipeFormView() {
    const [name, setName] = useState('')
    const [selectedIngredients, setSelectedIngredients] = useState<RecipeIngredient[]>([]) // The list of ingredients added to the recipe
    const [search, setSearch] = useState('') // whatever value the user has typed into the ingredient search field (which is also the ingredient name field)

    // Note that we are using RecipeIngredient[] and not Ingredient[]
    // because recipe ingredient contais both the ingredient and the recipe specific weight

    const filteredIngredients = ingredients.filter((ingredient) => ingredient.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <main>
            <h1>New Recipe</h1>
            <form>
                <label htmlFor="recipe-name">Name</label>
                <input id="recipe-name" type="text" placeholder="E.g. Chicken soup" value={name} onChange={(event) => setName(event.target.value)} />
                
                <label htmlFor="ingredient-search">Add ingredients</label>
                <input id="ingredient-search" type="text" placeholder="Search ingredients..." value={search} onChange={(event) => setSearch(event.target.value)} />
                <ul>
                    {filteredIngredients.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.name}
                            {ingredient.brand && ` (${ingredient.brand})`}
                        </li>
                    ))}
                </ul>

                <button type="submit">Save</button>
            </form>
        </main>
    )
}

export default RecipeFormView