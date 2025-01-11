import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Burguer.png'
import { navLinks } from "./navLinks"
import { SignOut } from '@phosphor-icons/react'
import { Container, NavLinks, NavLinkContainer, Footer } from './styles'
import { useUser} from '../../hooks/UserContext'

export function SideNavAdmin() {
    
    const {logout} = useUser();

    return(
        <Container>
            <img src={Logo} alt="Hamburguer Logo" />
            <NavLinkContainer>
               {navLinks.map( link => (
                <NavLinks key={link.id} to={link.path}>
                    {link.icon}
                    <span>{link.label}</span>
                </NavLinks>
               ))} 
            </NavLinkContainer>
            <Footer>
                <NavLinks to="/login" onClick={logout}>
                    <SignOut />
                    <p>Sair</p>
                </NavLinks>
            </Footer>
        </Container>
    )
}