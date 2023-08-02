import { TouchableOpacityProps } from 'react-native';

import { Container, StatusIcon, Title, Time, Divider, DietInOutIconProps } from "./styles";
import { DietInOutProps } from '@screens/ViewMeal/styles';

type Props = TouchableOpacityProps & {
    time: string,
    title: string,
    diet: DietInOutProps
}

export function MealCard({ time, diet, title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Time>
                {time}
            </Time>
            <Divider />
            <Title>
                {title}
            </Title>
            <StatusIcon
                diet={diet}
            />
        </Container>

    )
}