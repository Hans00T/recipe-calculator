//import { useState } from 'react'
import './App.css'
//import RecipeCard from './components/RecipeCard'
import RecipeList from './components/RecipeList'

const recipes = [
    {
        id: 1,
        name: 'Kanakastike',
        cookedWeight: 676,
        caloriesPer100g: 120,
    },
    {
        id: 2,
        name: 'Kinkkupiirakka',
        cookedWeight: 1020,
        caloriesPer100g: 210,
    },
    {
        id: 3,
        name: 'Mangomousse',
        cookedWeight: 500,
        caloriesPer100g: 110,
    },
]

function App() {
  //const [count, setCount] = useState(0)
  //console.log('App rendered')

  return (
    <main>
      <h1>Recipe Calculator</h1>
      <p>Laske valmistamiesi ruokien kalorit ja makrot.</p>

      <RecipeList recipes={recipes} />
    </main>
  )
}

export default App
