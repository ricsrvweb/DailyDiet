import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    text: string;
}

export function ButtonFeed({ text, ...rest }: Props) {
    return (
        <Container
            {...rest}
        >
            <Title>
                {text}
            </Title>
        </Container>
    )
}
