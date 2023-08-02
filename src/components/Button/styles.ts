import { TouchableOpacity } from 'react-native';
import styled, { css } from "styled-components/native";
import { Plus } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    min-height: 50px;
    max-height: 50px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_2};
    border-radius: 6px;

    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE_S_14}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `};
    margin-left: 10px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE
}))``;