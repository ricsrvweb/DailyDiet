import { ButtonIcon } from "@components/ButtonIcon";
import { Container, TotalPercent, TextPercent } from "./styles";

type Props = {
    average: string;
}

export function PercentCard({ average }: Props) {
    return (

        <Container>

            <TotalPercent>
                {average}
            </TotalPercent>
            <TextPercent>
                das refeições dentro da dieta
            </TextPercent>
        </Container>

    )
}