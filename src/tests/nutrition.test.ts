import { describe, it, expect } from 'vitest'
import { calculateRawWeight } from '../utils/nutrition'

describe('Nutrition calculations', () => {
    it('should calculate a simple addition correctly', () => {
        expect(2 + 2).toBe(4)
    })
})

describe('calculateRawWeight', () => {
    it('should calculate the total raw weight of a recipe', () => {
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

        expect(calculateRawWeight(recipe)).toBe(700)
    })
})