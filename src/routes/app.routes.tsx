import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Daily } from '@screens/Daily';
import { FeedBackMeal } from '@screens/FeedBackMeal';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';
import { ViewMeal } from '@screens/ViewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="daily"
                component={Daily}
            />
            <Screen
                name="feedback"
                component={FeedBackMeal}
            />
            <Screen
                name="new"
                component={NewMeal}
            />
            <Screen
                name="statistics"
                component={Statistics}
            />
            <Screen
                name="viewmeal"
                component={ViewMeal}
            />
        </Navigator>
    );
}