import { useState } from 'react'
import { Link } from 'react-router-dom'

type RecipeCardProps = {
    id: number
    name: string
    cookedWeightG?: number
}

function RecipeCard({ id, name, cookedWeightG }: RecipeCardProps) {

    return (
        <article className="recipe-card">
            <h2>
                <Link to={`/recipes/${id}`}>{name}</Link>
            </h2>
            <p>Valmista ruokaa arviolta: {cookedWeightG ?? '-'} g</p>
        
            <button>Valmista tämä</button>
        </article>
    )
}

export default RecipeCard