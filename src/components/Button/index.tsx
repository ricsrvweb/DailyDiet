import { Container, PlusIcon, Title } from "./styles";

import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    text: string;
}

export function Button({ text, ...rest }: Props) {
    return (
        <Container {...rest}>
            <PlusIcon />
            <Title>
                {text}
            </Title>
        </Container>
    )
}
