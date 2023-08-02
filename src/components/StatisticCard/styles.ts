import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 89px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    border-radius: 6px;

    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.BODY_S_24}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-size: ${theme.FONT_SIZE.TITLE_S_14}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;