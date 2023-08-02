import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
    width: 24px;
    height: 24px;
    position: absolute;
    padding-top: 138px;
    padding-left: 360px;
`;

export const StatistcsIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
}))``;