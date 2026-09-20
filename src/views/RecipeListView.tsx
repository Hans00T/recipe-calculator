import RecipeList from '../components/RecipeList'
import { recipes } from '../data/recipes'

// the "main" view where we can look at all the recipes

function RecipeListView() {
    return (
        <main>
            <h1>Recipe Calculator</h1>
            <p>Laske valmistamiesi ruokien kalorit ja makrot.</p>

            <RecipeList recipes={recipes} />
        </main>
    )
}

export default RecipeListView