import { Container, Navigation, HeaderLink, Options, Profile, Button, LinkContainer, Content} from '../Header/styles'


import { UserCircle, ShoppingCart } from "@phosphor-icons/react"
export function Header() {

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink>
                            Home
                        </HeaderLink>
                        <HeaderLink>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color='#000' size={24} />
                        <div>
                            <p>
                                Olá <span>Mateus</span>
                            </p>
                            <Button>Sair</Button>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <HeaderLink>
                            <ShoppingCart color='#000' fontSize={24} />
                            Carrinho
                        </HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}