import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

    justify-content: flex-end;
`;

export const PercentValue = styled.Text`

`;

export const Content = styled.View`
    width: 100%;
    height: 85%;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 20px;

    align-items:center;
    padding: 24px;
`;

export const BackButton = styled(TouchableOpacity)`
    flex: 1;
    margin-left: 20px;
`;

export const StatisticTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.TITLE_XS_16}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-bottom: 20px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK
}))`
`;

export const ContentMeals = styled.View`
    flex-direction: row;
`;

export const BetweenCards = styled.View`
    width: 3%;
`;


