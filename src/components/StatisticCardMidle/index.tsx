import { Container, Title, Subtitle, ButtonTypeStyleProps } from "./styles";

type Props = {
    title: number;
    subtitle: string;
    type?: ButtonTypeStyleProps;
}

export function StatisticCardMidle({ title, subtitle, type = 'PRIMARY' }: Props) {
    return (
        <Container
            type={type}
        >
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container>
    );

}