import styled from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';

export type TitleAddEditMealProps = 'PRIMARY' | 'SECONDARY' | 'DEFAULT';

type Props = {
    type: TitleAddEditMealProps;
}

export const Container = styled.View<Props>`
    width: 100%;
    height: 82px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme, type }) => (type === 'PRIMARY') ? theme.COLORS.GREEN_LIGHT : (type === 'SECONDARY') ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_5};
`;

export const Title = styled.Text`
    width: 60%;
    align-content: center;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS_16}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const BackButton = styled.TouchableOpacity`
    width: 40%;
    padding-left: 20px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_2
}))`
`;