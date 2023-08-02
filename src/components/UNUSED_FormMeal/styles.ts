import styled from "styled-components/native";
import { TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export const Container = styled.View`
    flex: 1;
    padding: 35px;
`;

export const LabelField = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_2};

    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS_16}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

    margin-top: 25px;
`;

export const Nome = styled(TextInput)`

    min-height: 48px;
    max-height: 48px;

    padding-left: 16px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    color: ${({ theme }) => theme.COLORS.GRAY_1};

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M_18}px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Descricao = styled(TextInput)`

    min-height: 120px;
    max-height: 120px;

    padding-left: 16px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    color: ${({ theme }) => theme.COLORS.GRAY_1};

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M_18}px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    
`;

export const ContainerDate = styled.View`
    flex: 1;
`;

export const ContainerTime = styled.View`
    
`;

export const ContainerDateTime = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const ContainerYes = styled.View`
    flex: 1;
`;

export const ContainerYesNo = styled.View`
    flex-direction: row;
`;

export const DateTimeField = styled(DateTimePicker)`

    min-height: 48px;
    max-height: 48px;

    min-width: 153.5px;
    max-width: 153.5px;

    padding-left: 16px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    color: ${({ theme }) => theme.COLORS.GRAY_1};

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M_18}px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;