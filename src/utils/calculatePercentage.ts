import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "@storage/Meal/mealGetAll";
import dayjs from "dayjs";

export async function calculatePercentage() {
    try {
        const storedMeals = await mealGetAll();

        const sortStoredMeals = storedMeals.slice().sort((a, b) => Number(dayjs(a.date)) - Number(dayjs(b.date)));
        let sequence: number[] = [];
        let cont: number = 0;
        for (let meal of sortStoredMeals) {
            if (meal.diet === false) {
                if (cont > 0) {
                    sequence.push(cont);
                    cont = 0;
                }
            } else {
                cont++;
            }
        }
        cont > 0 && sequence.push(cont);
        const sequenceMeals = (sequence.sort((a, b) => Number(b) - Number(a)));
        const bestSequence = sequenceMeals[0];

        const totalMeal = storedMeals.length;

        const mealsInDiet = storedMeals.filter(meal => meal.diet === true).length;

        const mealsOutDiet = storedMeals.filter(meal => meal.diet === false).length;

        const mealsPercentageInDiet = (mealsInDiet / totalMeal) * 100;

        return { totalMeal, mealsInDiet, mealsOutDiet, mealsPercentageInDiet, bestSequence }
    } catch (error) {
        throw error;
    }
}