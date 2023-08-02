import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import {
    Container,
    Content,
    BackButton,
    BackIcon,
    StatisticTitle,
    ContentMeals,
    BetweenCards
} from "./styles";
import { StatisticCard } from "@components/StatisticCard";
import { PercentCard } from "@components/PercentCard";
import { StatisticCardMidle } from "@components/StatisticCardMidle";
import { calculatePercentage } from '@utils/calculatePercentage';

export function Statistics() {
    const [totalMeal, setTotalMeal] = useState(0);
    const [mealsInDiet, setMealsInDiet] = useState(0);
    const [mealsOutDiet, setMealsOutDiet] = useState(0);
    const [mealsPercentageInDiet, setmealsPercentageInDiet] = useState(0);
    const [bestSequence, setBestSequence] = useState(0);

    const navigation = useNavigation();

    async function loadStatistics() {
        const { totalMeal, mealsInDiet, mealsOutDiet, mealsPercentageInDiet, bestSequence } = await calculatePercentage();

        setTotalMeal(totalMeal);
        setMealsInDiet(mealsInDiet);
        setMealsOutDiet(mealsOutDiet);
        setmealsPercentageInDiet(mealsPercentageInDiet);
        setBestSequence(bestSequence);
    }

    const average = (mealsPercentageInDiet ? mealsPercentageInDiet.toFixed(2).replace(".", ",").replace(",00", "") : "0") + '%';

    function handleGoBack() {
        navigation.goBack();
    }

    useFocusEffect(useCallback(() => {
        loadStatistics();
    }, []));

    return (
        <Container>
            <BackButton onPress={handleGoBack}>
                <BackIcon />
            </BackButton>
            <PercentCard
                average={average}
            />
            <Content>
                <StatisticTitle>
                    Estatísticas gerais
                </StatisticTitle>
                <StatisticCard
                    title={bestSequence}
                    subtitle="melhor sequência de pratos dentro da dieta"
                />
                <StatisticCard
                    title={totalMeal}
                    subtitle="refeições registradas"
                />
                <ContentMeals>
                    <StatisticCardMidle
                        title={mealsInDiet}
                        subtitle="refeições dentro da dieta"

                    />
                    <BetweenCards />
                    <StatisticCardMidle
                        title={mealsOutDiet}
                        subtitle="refeições fora da dieta"
                        type="SECONDARY"
                    />
                </ContentMeals>
            </Content>
        </Container>
    );
}