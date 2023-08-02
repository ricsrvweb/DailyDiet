import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    height: 82px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 20px 0;
`;

export const TotalPercent = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.BODY_XS_32}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const TextPercent = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-size: ${theme.FONT_SIZE.TITLE_S_14}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;



