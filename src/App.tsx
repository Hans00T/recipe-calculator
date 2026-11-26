import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecipeListView from './views/RecipeListView'
import RecipeView from './views/RecipeView'
import RecipeFormView from './views/RecipeFormView'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={<RecipeListView />} />
        <Route path="/recipes/new" element={<RecipeFormView />} />
        <Route path="/recipes/:id" element={<RecipeView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
