import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, ButtonTypeStyleProps, Icon } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonFooter({ title, icon, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            {icon &&
                <Icon
                    name={icon}
                    style={type === 'SECONDARY' && { color: '#1B1D1E' }}
                />
            }
            <Title
                type={type}
            >
                {title}
            </Title>
        </Container>
    )
}