import { useState, useCallback } from 'react';
import { SectionList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Container, Headerlist } from './styles';

import { Header } from '@components/Header';
import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';
import { TitleLeft } from '@components/TitleLeft';
import { ButtonIcon } from '@components/ButtonIcon';
import { MealCard } from '@components/MealCard';
import { ListEmpty } from '@components/ListEmpty';

import { mealGetAll } from '@storage/Meal/mealGetAll';
import { MealStorageDTO } from '@storage/Meal/MealStorageDTO';
import { listMealSection } from '@utils/listMealsSection';

export interface MealsData {
    title: string
    data: MealStorageDTO[]
}

export function Daily() {
    const [meals, setMeals] = useState<MealsData[]>([]);
    const [percentageInDiet, setPercentageInDiet] = useState(0);

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate('new', { type: 'add' });
    }

    function handleSatistics() {
        navigation.navigate('statistics');
    }

    function handleMeal(meal: MealStorageDTO) {
        navigation.navigate('viewmeal', { meal });
    }

    async function fetchMeals() {
        try {
            const Mealdata = await mealGetAll();

            const mealsPercentageInDiet = (Mealdata.filter(meal => meal.diet === true).length / Mealdata.length) * 100

            const mealsByDay = listMealSection(Mealdata);

            setPercentageInDiet(mealsPercentageInDiet);
            setMeals(mealsByDay);
        } catch (error) {
            console.log(error);
        }
    }

    const average = (percentageInDiet ? percentageInDiet.toFixed(2).replace(".", ",").replace(",00", "") : "0") + '%';

    useFocusEffect(useCallback(() => {
        fetchMeals();
    }, []));

    return (
        <Container>
            <Header />
            <PercentCard average={average} />
            <ButtonIcon
                onPress={handleSatistics}
            />
            <TitleLeft text='Refeições' />
            <Button
                text='Nova Refeição'
                onPress={handleNewMeal}
            />

            {<SectionList
                sections={meals}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <MealCard
                        time={item.time}
                        title={item.name}
                        diet={item.diet ? 'IN' : 'OUT'}
                        onPress={() => handleMeal(item)}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Headerlist>{title}</Headerlist>
                )}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    meals.length === 0 && { flex: 1 }
                ]}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message='Que tal cadastrar alguma refeição?'
                    />
                )}
                showsVerticalScrollIndicator={false}
            />}
        </Container>
    );
}