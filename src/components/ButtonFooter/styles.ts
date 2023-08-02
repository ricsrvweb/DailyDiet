import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    min-height: 50px;
    max-height: 50px;
    
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};

    border-radius: 6px;
    border: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_1};

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.TITLE_XS_16}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.WHITE
}))`
    margin-right: 10px;
`;

