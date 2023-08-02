import { useNavigation, useRoute } from "@react-navigation/native";

import {
    Container,
    Title,
    SubTitle,
    Image,
    SubTitleBold,
    ContainerText,
    TitleSubtitleImageStyleProps
} from "./styles";

import Feed_Good from "@assets/Feed_Good.png";
import Feed_Bad from "@assets/Feed_Bad.png";

import { ButtonFeed } from "@components/ButtonFeed";

type Props = {
    feed: TitleSubtitleImageStyleProps;
}

export function FeedBackMeal() {
    const route = useRoute();
    const { feed } = route.params as Props;
    const navigation = useNavigation();

    function handleGoToHome() {
        navigation.navigate('daily');
    }
    return (
        <Container>
            <Title
                type={feed}
            >
                {feed === 'SUCCESS' ? 'Continue assim!' : 'Que pena!'}
            </Title>
            <ContainerText>
                <SubTitle>
                    Você {feed === 'SUCCESS' ? 'continua' : ''}
                </SubTitle>
                <SubTitleBold>
                    {feed === 'SUCCESS' ? ' dentro' : 'saiu'} da dieta
                </SubTitleBold>
                <SubTitle>
                    {feed === 'SUCCESS' ? '. Muito bem!' : ' dessa vez, mas continue'}
                </SubTitle>
            </ContainerText>
            {feed === 'FAIL' ?
                <SubTitle>
                    se esforçando e não desista!
                </SubTitle>
                :
                ''
            }

            <Image source={feed === 'SUCCESS' ? Feed_Good : Feed_Bad} />
            <ButtonFeed
                text="Ir para a página inicial"
                onPress={handleGoToHome}
            />
        </Container>
    )
}