import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type DietInOutIconProps = 'IN' | 'OUT';

type Props = {
    diet: DietInOutIconProps;
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 49px;
    
    border-radius: 6px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};

    flex-direction: row;
    align-items: center;

    padding: 12px;
    margin-bottom: 6px;
`;
export const Time = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE_M_12}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Title = styled.Text`
    flex: 1;

    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS_16}px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Divider = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
    margin: 10px;
`;

export const StatusIcon = styled.View<Props>`
    width: 14px;
    height: 14px;
    background-color: ${({ theme, diet }) => diet === 'IN' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    border-radius: 10px;
`;