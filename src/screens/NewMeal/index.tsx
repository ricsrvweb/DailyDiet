import { useState } from "react";
import { Container, Form } from "./styles";
import uuid from 'react-native-uuid';
import dayjs from 'dayjs';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInputProps, Keyboard, Alert } from "react-native";

import { HeaderMeal } from '@components/HeaderMeal';
import { ButtonFooter } from "@components/ButtonFooter";
import { ButtonYes } from "@components/ButtonYes";
import { ButtonNo } from "@components/ButtonNo";
import {
    LabelField,
    Nome,
    Descricao,
    ContainerDateTime,
    DateTimeField,
    ContainerDate,
    ContainerTime,
    ContainerYesNo,
    ContainerYes
} from "./styles";

import { AppError } from "@utils/AppError";

import { ButtonFeed } from "@components/ButtonFeed";
import { mealCreate } from "@storage/Meal/mealCreate";
import { mealGetById } from "@storage/Meal/mealGetById";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { mealEdit } from "@storage/Meal/mealEdit";

interface RouteParams {
    type: 'add' | 'edit'
    meal?: MealStorageDTO;
}

export function NewMeal({ ...rest }: TextInputProps) {

    const route = useRoute();
    const { type, meal } = route.params as RouteParams;

    const [activeYes, setActiveYes] = useState(meal?.diet === true || false);
    const [activeNo, setActiveNo] = useState(meal?.diet === false || false);

    const [name, setName] = useState(meal?.name || '');
    const [description, setDescription] = useState(meal?.description || '');
    const [dateMeal, setDateMeal] = useState(meal?.date || new Date());
    const [showDate, setShowDate] = useState(false);
    const [timeMeal, setTimeMeal] = useState(meal?.time || '');

    const formattedDate = dayjs(dateMeal).format('DD/MM/YYYY');

    const navigation = useNavigation();

    function handleActiveButtonYes() {
        if (!activeYes) {
            setActiveYes(true);
            setActiveNo(false);
        }
    }

    function handleActiveButtonNo() {
        if (!activeNo) {
            setActiveYes(false);
            setActiveNo(true);
        }
    }

    async function handleAddMeal() {
        try {
            if (type === 'add') {
                if (name.trim().length === 0) {
                    return Alert.alert('Nova Refeição', 'Campo Nome não pode ficar vazio!');
                }

                if (timeMeal.trim().length === 0) {
                    return Alert.alert('Nova Refeição', 'Campo Hora não pode ficar vazio!');
                }

                const diet = (activeYes) ? true : false;

                const newMeal = {
                    id: String(uuid.v4()),
                    date: dateMeal,
                    time: timeMeal,
                    name,
                    description,
                    diet
                }
                await mealCreate(newMeal);
                navigation.navigate('feedback', { feed: diet ? 'SUCCESS' : 'FAIL' })
            } else {
                if (meal) {
                    const diet = (activeYes) ? true : false;

                    const mealUpdate = {
                        id: meal.id,
                        date: dateMeal,
                        time: timeMeal,
                        name,
                        description,
                        diet
                    }
                    await mealEdit(meal?.id, mealUpdate)
                }
                navigation.navigate('daily')
            }

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Refeição', error.message);
            } else {
                console.log(error);
                if (type === 'add') {
                    Alert.alert('Nova Refeição', 'Não foi possível adicionar a Refeição.')
                } else {
                    Alert.alert('Alterar Refeição', 'Não foi possível alterar esta Refeição.')
                }
            }
        }
    }

    return (
        <Container>
            <HeaderMeal
                textHeader={type === 'add' ? "Nova Refeição" : "Editar Refeição"}
            />
            <Form>
                <LabelField>
                    Nome
                </LabelField>
                <Nome
                    {...rest}
                    value={name}
                    onChangeText={setName}
                />
                <LabelField>
                    Descrição
                </LabelField>
                <Descricao
                    value={description}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={setDescription}
                    {...rest}
                />
                <ContainerDateTime>
                    <ContainerDate>
                        <LabelField>
                            Data
                        </LabelField>
                        <DateTimeField
                            {...rest}
                            value={formattedDate}
                            onPressIn={() => setShowDate(true)}
                        />
                        {showDate && (
                            <DateTimePicker
                                value={new Date(dateMeal)}
                                mode={'date'}
                                is24Hour
                                display="default"
                                onChange={(event, selectDate) => {
                                    setShowDate(false)
                                    setDateMeal(selectDate as Date)
                                }}
                                locale="pt-BR"
                            />
                        )}
                    </ContainerDate>
                    <ContainerTime>
                        <LabelField>
                            Hora
                        </LabelField>
                        <DateTimeField
                            value={timeMeal}
                            onChangeText={setTimeMeal}
                            onBlur={Keyboard.dismiss}
                        />
                    </ContainerTime>
                </ContainerDateTime>

                <LabelField>
                    Está dentro da dieta?
                </LabelField>
                <ContainerYesNo>
                    <ContainerYes>
                        <ButtonYes
                            title="Sim"
                            isActive={activeYes}
                            onPress={handleActiveButtonYes}
                        />
                    </ContainerYes>
                    <ButtonNo
                        title="Não"
                        isActive={activeNo}
                        onPress={handleActiveButtonNo}
                    />
                </ContainerYesNo>

                <ButtonFooter
                    title={type === 'add' ? "Cadastrar Refeição" : "Salvar Alterações"}
                    onPress={handleAddMeal}
                />
            </Form>

        </Container>
    );
}