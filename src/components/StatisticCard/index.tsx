import { Container, Title, Subtitle } from "./styles";

type Props = {
    title: number;
    subtitle: string;
}

export function StatisticCard({ title, subtitle }: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container>
    );

}