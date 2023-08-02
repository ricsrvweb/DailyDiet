import { ButtonYes } from "@components/ButtonYes";
import { ButtonNo } from "@components/ButtonNo";
import {
    Container,
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

import { useState } from "react";

import { TextInputProps } from "react-native";

export function FormMeal({ ...rest }: TextInputProps) {
    const [date, setDate] = useState(new Date());
    const [activeYes, setActiveYes] = useState(false);
    const [activeNo, setActiveNo] = useState(false);

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

    return (
        <Container>
            <LabelField>
                Nome
            </LabelField>
            <Nome
                {...rest}
            />
            <LabelField>
                Descrição
            </LabelField>
            <Descricao
                multiline={true}
                {...rest}
            />
            <ContainerDateTime>
                <ContainerDate>
                    <LabelField>
                        Data
                    </LabelField>
                    <DateTimeField
                        value={date}
                        locale="pt-BR"
                    />
                </ContainerDate>
                <ContainerTime>
                    <LabelField>
                        Hora
                    </LabelField>
                    <DateTimeField
                        value={date}
                        mode="time"
                        locale="pt-BR"
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
        </Container>
    )
}