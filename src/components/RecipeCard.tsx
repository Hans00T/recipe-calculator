import { useState } from 'react'

type RecipeCardProps = {
    name: string
    cookedWeight: number
    caloriesPer100g: number
}

function RecipeCard({ name, cookedWeight, caloriesPer100g }: RecipeCardProps) {
    const [isSelected, setIsSelected] = useState(false)
    
    return (
        <article>
            <h2>{name}</h2>
            <p>{cookedWeight} g</p>
            <p>{caloriesPer100g} kcal / 100 g</p>
        
            <button onClick={() => setIsSelected(!isSelected)}>
                {isSelected ? 'Aloitetaan!' : 'Valmista tämä'}
            </button>
        </article>
    )
}

export default RecipeCard