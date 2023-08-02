import { useNavigation } from "@react-navigation/native";
import { Container, Title, BackButton, BackIcon, TitleAddEditMealProps } from "./styles";

type Props = {
    type?: TitleAddEditMealProps;
    textHeader: string;
}

export function HeaderMeal({ type = 'DEFAULT', textHeader }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container
            type={type}
        >
            <BackButton onPress={handleGoBack}>
                <BackIcon />
            </BackButton>
            <Title>
                {textHeader}
            </Title>
        </Container>
    )
}