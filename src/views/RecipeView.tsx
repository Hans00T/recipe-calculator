// view for a single recipe 
import { useParams } from "react-router-dom"
import { recipes } from "../data/recipes"

function RecipeView() {
    const { id } = useParams()

    const recipe = recipes.find((recipe) => recipe.id === Number(id))

    if (!recipe) {
        
        return (
            <main>
                <h1>Reseptiä ei löytynyt</h1>
                <p>Ei reseptiä annetulla tunnisteella.</p>
            </main>
        )
    }

    
    return (
        <main>
            <div className="recipe-header">
                <h1>{recipe.name}</h1>
                <p>Tällä reseptillä ruokaa syntyy noin: {recipe.cookedWeightG ?? '-'} g</p>
            </div>

            <div className="recipe-view-nutrition-facts">
                <strong>Ravintoarvot per 100 g</strong>
                <p>Energiaa: </p>
                <p>Rasvaa: </p>
                <p>Tyydyttyneitä rasvahappoja: </p>
                <p>Hiilihydraattia: </p>
                <p>Kuitua: </p>
                <p>Proteiinia: </p>
            </div>

            <div className="recipe-ingredients">
                <h2>Ainesosat</h2>

                <ul>
                    {recipe.ingredients.map((item) => (
                        <li key={item.ingredient.id}>
                            {item.ingredient.name} - {item.weightG} g
                        </li>
                    ))}
                </ul>
            </div>

            <div className="recipe-instructions">
                <h2>Valmistusohjeet</h2>
                <ol>
                    {recipe.steps.map((step) => (
                        <li key={step.stepNumber}>
                            {step.instruction}
                        </li>
                    ))}
                </ol>
            </div>
        </main>
    )
}

export default RecipeView