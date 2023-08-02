import { Title } from "./styles";

type Props = {
    text: string;
}

export function TitleLeft({ text }: Props) {
    return (
        <Title>
            {text}
        </Title>
    )
}