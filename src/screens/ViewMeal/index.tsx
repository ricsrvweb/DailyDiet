import {
    Container,
    Form,
    Title,
    Description,
    DateTime,
    DateTimeTitle,
    DietInOut,
    TextDiet,
    IconDiet
} from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, ImageBackground, TextInputProps } from "react-native";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { HeaderMeal } from "@components/HeaderMeal";
import dayjs from "dayjs";
import { ButtonFooter } from "@components/ButtonFooter";
import { mealRemoveById } from "@storage/Meal/mealRemoveById";


interface RouteParams {
    meal: MealStorageDTO;
}

export function ViewMeal({ ...rest }: TextInputProps) {
    const route = useRoute();
    const { meal } = route.params as RouteParams;

    const formattedDate = dayjs(meal.date).format('DD/MM/YYYY');

    const navigation = useNavigation();

    function handleGoToEditMeal() {
        navigation.navigate('new', { type: 'edit', meal })
    }

    async function mealRemove() {
        try {
            await mealRemoveById(meal.id);
            navigation.navigate('daily');
        } catch (error) {
            console.log(error);
            Alert.alert('Remover Refeição', 'Não foi possível remover esta refeição!');
        }
    }

    async function handleDeletemeal() {
        Alert.alert(
            'Excluir',
            'Deseja realmente excluir o registro da refeição?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Sim, excluir', onPress: () => mealRemove() }
            ]
        )

    }

    return (
        <Container>
            <HeaderMeal
                type="PRIMARY"
                textHeader="Refeição"
            />
            <Form>
                <Title>{meal.name}</Title>
                <Description>{meal.description}</Description>
                <DateTimeTitle>Data e hora</DateTimeTitle>
                <DateTime>{formattedDate} às {meal.time}</DateTime>
                <DietInOut>
                    <IconDiet
                        diet={meal.diet ? 'IN' : 'OUT'}
                    />
                    <TextDiet>{meal.diet ? 'dentro da dieta' : 'fora da dieta'}</TextDiet>
                </DietInOut>
                <ButtonFooter
                    style={{ marginTop: 'auto' }}
                    title="Editar Refeição"
                    icon="drive-file-rename-outline"
                    onPress={handleGoToEditMeal}
                />

                <ButtonFooter
                    style={{ marginTop: 9 }}
                    title="Excluir Refeição"
                    icon="delete-outline"
                    type="SECONDARY"
                    onPress={handleDeletemeal}
                />
            </Form>
        </Container>
    );
}