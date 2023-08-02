import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealCreate(newMealAdd: MealStorageDTO) {
    try {
        const storedMeals = await mealGetAll();

        //const mealAlreadyExists = storedMeals.includes(newMealAdd);

        //if (mealAlreadyExists) {
        //    throw new AppError('Já existe uma refeição cadastrada com este nome!');
        //}

        const storage = JSON.stringify([...storedMeals, newMealAdd]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}