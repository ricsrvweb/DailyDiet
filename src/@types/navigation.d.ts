import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            daily: undefined;
            new: {
                type: string;
                meal?: MealStorageDTO;
            },
            statistics: undefined;
            feedback: {
                feed: string;
            },
            viewmeal: {
                meal: MealStorageDTO;
            }
        }
    }
}