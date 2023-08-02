import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonNoStyleProps = {
    isActive?: boolean
}

export const Container = styled(TouchableOpacity) <ButtonNoStyleProps>`
    ${({ theme, isActive }) => isActive && css`
        border: 1px solid ${theme.COLORS.RED_DARK};
    `};
    flex-direction: row;

    min-height: 50px;
    max-height: 50px;

    min-width: 180px;
    max-width: 180px;

    background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const RedCircle = styled.View`
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.COLORS.RED_DARK};
    border-radius: 6px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE_XS_16}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
    margin-left: 10px;
`;