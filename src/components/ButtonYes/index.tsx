import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonYesStyleProps, GreenCircle } from "./styles";

type Props = TouchableOpacityProps & ButtonYesStyleProps & {
    title: string;
}

export function ButtonYes({ title, isActive = false, ...rest }: Props) {
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <GreenCircle />
            <Title>
                {title}
            </Title>
        </Container>
    )
}