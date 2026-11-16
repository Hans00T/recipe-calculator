import { describe, it, expect } from 'vitest'
import { calculateRawWeight, calculateNutrition, calculateNutritionPer100g } from '../utils/nutrition'
/**
 * This module tests functions from /src/utils/nutrition.ts
 * These functions handle the calculation logic for calculating macro and calorie
 * values for recipes
 */


// Test the function that calculates the weights of all the incredients into a total raw weight before cooking
describe('calculateRawWeight', () => {
    it('should calculate the total raw weight of a recipe', () => {
        // Initialize a hard-coded recipe for the test
        const recipe = {
            id: 1,
            name: 'Testiresepti',
            cookedWeightG: 676,
            ingredients: [
                {
                    ingredient: { id: 1, name: 'Kana' },
                    weightG: 400
                },
                {
                    ingredient: { id: 2, name: 'Ruokakerma' },
                    weightG: 200
                },
                {
                    ingredient: { id: 3, name: 'Sipuli' },
                    weightG: 100
                }
            ],
            steps: []
        }

        // Use the function that we want to test. compare the result to the hard coded value "700"
        expect(calculateRawWeight(recipe)).toBe(700)
    })
})

describe('calculateNutrition', () => {
    it('should calculate the total nutrition of a recipe', () => {
        // initialize a hard coded recipe for the test
        const recipe = {
            id: 1,
            name: 'Kanakastike',
            cookedWeightG: 676,
            ingredients: [
                {
                    ingredient: {
                        id: 1,
                        name: 'Kana',
                        caloriesPer100g: 110,
                        fatPer100g: 1.5,
                        saturatedFatPer100g: 0.4,
                        carbohydratesPer100g: 0,
                        fiberPer100g: 0,
                        proteinPer100g: 23
                    },
                    weightG: 400
                },
                {
                    ingredient: {
                        id: 2,
                        name: 'Ruokakerma',
                        caloriesPer100g: 180,
                        fatPer100g: 15,
                        saturatedFatPer100g: 9,
                        carbohydratesPer100g: 4,
                        fiberPer100g: 0,
                        proteinPer100g: 3
                    },
                    weightG: 200
                },
                {
                    ingredient: {
                        id: 3,
                        name: 'Sipuli',
                        caloriesPer100g: 40,
                        fatPer100g: 0.1,
                        saturatedFatPer100g: 0,
                        carbohydratesPer100g: 8.2,
                        fiberPer100g: 1.7,
                        proteinPer100g: 1.1
                    },
                    weightG: 100
                },
            ],
            steps: []
        }

        // Run the function of which results we want to test
        const nutrition = calculateNutrition(recipe);

        // compare the results to hard coded expected values. We test these separately just in case that some values are correct while some incorrect so we know where the test breaks
        expect(nutrition.calories).toBeCloseTo(840)
        expect(nutrition.fat).toBeCloseTo(36.1)
        expect(nutrition.saturatedFat).toBeCloseTo(19.6)
        expect(nutrition.carbohydrates).toBeCloseTo(16.2)
        expect(nutrition.fiber).toBeCloseTo(1.7)
        expect(nutrition.protein).toBeCloseTo(99.1)
    })
})

// Test the function that calculates nutrients per 100 g.
describe('calculateNutritionPer100g', () => {
    it('should calculate nutrition per 100g using cooked weight', () => {
        const nutrition = {
            calories: 840,
            fat: 36.1,
            saturatedFat: 19.6,
            carbohydrates: 16.2,
            fiber: 1.7,
            protein: 99.1
        }

        const result = calculateNutritionPer100g(nutrition, 700, 676)

        expect(result).not.toBeNull()

        expect(result!.calories).toBeCloseTo(124.26, 2)
        expect(result!.fat).toBeCloseTo(5.34, 2)
        expect(result!.saturatedFat).toBeCloseTo(2.90, 2)
        expect(result!.carbohydrates).toBeCloseTo(2.40, 2)
        expect(result!.fiber).toBeCloseTo(0.25, 2)
        expect(result!.protein).toBeCloseTo(14.66, 2)

    })
    it('should use raw weight when cooked weight is not provided', () => {
        const nutrition = {
            calories: 840,
            fat: 36.1,
            saturatedFat: 19.6,
            carbohydrates: 16.2,
            fiber: 1.7,
            protein: 99.1
        }

        const result = calculateNutritionPer100g(nutrition, 700)

        expect(result).not.toBeNull()

        expect(result!.calories).toBeCloseTo(120, 2)
        expect(result!.fat).toBeCloseTo(5.16, 2)
        expect(result!.saturatedFat).toBeCloseTo(2.8, 2)
        expect(result!.carbohydrates).toBeCloseTo(2.31, 2)
        expect(result!.fiber).toBeCloseTo(0.24, 2)
        expect(result!.protein).toBeCloseTo(14.16, 2)
    })
    it('should return null when weight is zero or negative', () => {
        const nutrition = {
            calories: 840,
            fat: 36.1,
            saturatedFat: 19.6,
            carbohydrates: 16.2,
            fiber: 1.7,
            protein: 99.1
        }

        expect(calculateNutritionPer100g(nutrition, 0)).toBeNull()
        expect(calculateNutritionPer100g(nutrition, -100)).toBeNull()
    })
})
