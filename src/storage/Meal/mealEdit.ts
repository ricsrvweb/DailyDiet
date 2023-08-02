import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealEdit(id: string, mealEdit: MealStorageDTO) {
    try {
        const storedMeals = await mealGetAll();

        const updatedMeal = storedMeals.map(meal => meal.id === id ? {
            ...meal,
            name: mealEdit.name,
            description: mealEdit.description,
            diet: mealEdit.diet,
            date: mealEdit.date,
            time: mealEdit.time
        } : meal);

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeal));

    } catch (error) {
        throw error;
    }
}