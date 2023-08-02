import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 24px;
`;

export const Headerlist = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS_16}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    margin-top: 15px;
    padding: 3px 1px;
`;