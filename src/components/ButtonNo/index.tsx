import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonNoStyleProps, RedCircle } from "./styles";

type Props = TouchableOpacityProps & ButtonNoStyleProps & {
    title: string;
}

export function ButtonNo({ title, isActive = false, ...rest }: Props) {
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <RedCircle />
            <Title>
                {title}
            </Title>
        </Container>
    )
}