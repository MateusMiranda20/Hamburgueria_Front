import { Container, Navigation, HeaderLink, Options, Profile, Button, LinkContainer, Content} from '../Header/styles'


import { UserCircle, ShoppingCart } from "@phosphor-icons/react"
import { useNavigate, useResolvedPath } from 'react-router-dom'
import {useUser} from '../../hooks/UserContext'
export function Header() {

    const navigate = useNavigate();

    const { pathname } = useResolvedPath()

    const {logout, userInfo} = useUser();

    

    function LogoutUser() {
        logout()

        navigate('/login')
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to={'/'} $isLink={pathname === '/'}>
                            Home
                        </HeaderLink>
                        <hr></hr>
                        <HeaderLink to={'/cardapio'}  $isLink={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color='#000' size={24} />
                        <div>
                            <p>
                                Olá <span>{userInfo.name}</span>
                            </p>
                            <Button onClick={LogoutUser}>Sair</Button>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <HeaderLink to={'/carrinho'}>
                            <ShoppingCart color='#000' fontSize={24} />
                            Carrinho
                        </HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}