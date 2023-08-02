import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type DietInOutProps = 'IN' | 'OUT';

type Props = {
    diet: DietInOutProps;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Form = styled.View`
    width: 100%;
    height: 95%;
    border-radius: 20%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.BODY_M_18}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}  
    margin-bottom: 8px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-size: ${theme.FONT_SIZE.TITLE_S_14}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}  
    margin-bottom: 24px;
`;

export const DateTimeTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.TITLE_M_12}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}  
    margin-bottom: 8px;
`;

export const DateTime = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-size: ${theme.FONT_SIZE.TITLE_S_14}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}  
    margin-bottom: 24px;
`;

export const DietInOut = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    width: 144px;
    height: 34px;
    border-radius: 20px;
`;

export const TextDiet = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.TITLE_S_14}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `} 
`;

export const IconDiet = styled.View<Props>`
    width: 8px;
    height: 8px;
    margin: 0 10px 0 20px;
    background-color: ${({ theme, diet }) => diet === 'IN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 8px;
    align-items: center;
`;
