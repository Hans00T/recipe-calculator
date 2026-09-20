import type { Recipe, Ingredient } from '../types/recipe'

const chicken: Ingredient = {
  id: 1,
  name: 'Kana',
  brand: 'Kotimaista',
  caloriesPer100g: 110,
  fatPer100g: 1.5,
  carbohydratesPer100g: 0,
  proteinPer100g: 23,
  fiberPer100g: 0,
  saturatedFatPer100g: 0.4,
}

const cookingCream: Ingredient = {
  id: 2,
  name: 'Ruokakerma',
  brand: 'Valio',
  caloriesPer100g: 180,
  fatPer100g: 15,
  carbohydratesPer100g: 4,
  proteinPer100g: 3,
  fiberPer100g: 0,
  saturatedFatPer100g: 9,
}

const onion: Ingredient = {
  id: 3,
  name: 'Sipuli',
  caloriesPer100g: 40,
  fatPer100g: 0.1,
  carbohydratesPer100g: 8.2,
  proteinPer100g: 1.1,
  fiberPer100g: 1.7,
  saturatedFatPer100g: 0,
}

const ham: Ingredient = {
  id: 4,
  name: 'Kinkkusuikale',
  brand: 'Atria',
  caloriesPer100g: 120,
  fatPer100g: 4,
  carbohydratesPer100g: 2,
  proteinPer100g: 18,
  fiberPer100g: 0,
  saturatedFatPer100g: 1.5,
}

const egg: Ingredient = {
  id: 5,
  name: 'Kananmuna',
  caloriesPer100g: 143,
  fatPer100g: 9.5,
  carbohydratesPer100g: 0.7,
  proteinPer100g: 12.6,
  fiberPer100g: 0,
  saturatedFatPer100g: 3.1,
}

const cheese: Ingredient = {
  id: 6,
  name: 'Juustoraaste',
  brand: 'Valio',
  caloriesPer100g: 350,
  fatPer100g: 27,
  carbohydratesPer100g: 1,
  proteinPer100g: 25,
  fiberPer100g: 0,
  saturatedFatPer100g: 17,
}

const flour: Ingredient = {
  id: 7,
  name: 'Vehnäjauho',
  caloriesPer100g: 340,
  fatPer100g: 1.5,
  carbohydratesPer100g: 68,
  proteinPer100g: 10,
  fiberPer100g: 3,
  saturatedFatPer100g: 0.3,
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Kanakastike',
    cookedWeightG: 676,

    ingredients: [
      {
        ingredient: chicken,
        weightG: 400,
      },
      {
        ingredient: cookingCream,
        weightG: 200,
      },
      {
        ingredient: onion,
        weightG: 100,
      },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction: 'Pilko kana ja sipuli.',
      },
      {
        stepNumber: 2,
        instruction: 'Paista kana ja sipuli pannulla.',
      },
      {
        stepNumber: 3,
        instruction: 'Lisää ruokakerma ja anna hautua.',
      },
    ],
  },

  {
    id: 2,
    name: 'Kinkkupiirakka',
    cookedWeightG: 760,

    ingredients: [
      {
        ingredient: ham,
        weightG: 250,
      },
      {
        ingredient: egg,
        weightG: 200,
      },
      {
        ingredient: cheese,
        weightG: 150,
      },
      {
        ingredient: flour,
        weightG: 200,
      },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction: 'Valmista piirakkataikina vehnäjauhoista.',
      },
      {
        stepNumber: 2,
        instruction: 'Levitä taikina vuokaan.',
      },
      {
        stepNumber: 3,
        instruction: 'Lisää kinkku ja juustoraaste.',
      },
      {
        stepNumber: 4,
        instruction: 'Kaada kananmunat päälle.',
      },
      {
        stepNumber: 5,
        instruction: 'Paista piirakka kypsäksi.',
      },
    ],
  },
]