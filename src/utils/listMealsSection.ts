import dayjs from "dayjs";

import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";

export function listMealSection(meals: MealStorageDTO[]) {
    const sortMeals = meals.slice().sort((a, b) => Number(dayjs(a.date)) - Number(dayjs(b.date)));

    let days: string[] = [];

    for (let meal of sortMeals) {
        const day = dayjs(meal.date).format('DD.MM.YYYY');

        if (!days.includes(day)) {
            days.push(day);
        }
    }

    const mealsByDay = days.map(day => {
        const mealsSection = sortMeals
            .filter(meal => dayjs(meal.date).format('DD.MM.YYYY') === day)
            .map(meal => meal);
        return {
            title: day,
            data: mealsSection.reverse()
        }
    });
    return mealsByDay.reverse();
}
