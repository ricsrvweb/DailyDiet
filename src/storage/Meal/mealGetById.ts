import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealGetById(idMeal: string) {
    try {
        const storage = await mealGetAll();

        const mealData = storage.filter(meal => meal.id === idMeal);

        return mealData;
    } catch (error) {
        throw error;
    }
}