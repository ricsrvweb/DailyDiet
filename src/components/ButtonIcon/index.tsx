import { TouchableOpacityProps } from "react-native";

import { Container, StatistcsIcon } from "./styles";

export function ButtonIcon({ ...rest }) {
    return (
        <Container {...rest}>
            <StatistcsIcon />
        </Container>
    )
}