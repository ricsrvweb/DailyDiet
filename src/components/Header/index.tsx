import { Container, Logo, Avatar, LogoImg } from "./styles";

import logoImg from '@assets/Logo.png';
import avatarImg from '@assets/User.png';

export function Header() {
    return (
        <Container>
            <Logo>
                <LogoImg source={logoImg} />
            </Logo>
            <Avatar source={avatarImg} />
        </Container>
    )
}
