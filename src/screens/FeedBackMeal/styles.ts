import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type TitleSubtitleImageStyleProps = 'SUCCESS' | 'FAIL';

type Props = {
    type: TitleSubtitleImageStyleProps;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};

    align-items: center;
    padding: 24px;
`;

export const ContainerText = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text<Props>`
    margin-top: 150px;
    ${({ theme, type }) => css`
        color: ${type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-size: ${theme.FONT_SIZE.BODY_S_24}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const SubTitle = styled.Text`
    margin-top: 5px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.TITLE_XS_16}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;

export const SubTitleBold = styled.Text`
    margin-top: 5px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.TITLE_XS_16}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const Image = styled.Image`
    margin-top: 40px;
    width: 224px;
    height: 288px;
`;