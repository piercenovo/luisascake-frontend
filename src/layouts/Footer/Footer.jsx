import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterRights,
  FooterWrapper,
  FooterGrid,
  FooterContact,
  Container,
  FooterContactExtra
} from './FooterStyles'
import { routes, routesClient, routesContact } from '../../data/RouterData'

function Footer () {
  return (
      <Container>
      <FooterWrapper>
        <FooterGrid justify="space-between">
            <FooterLinkItems>
              <FooterLinkTitle>Luisa's Cake</FooterLinkTitle>
              {routes.map((route, index) => (
                <FooterLink key={index} to={route.link}>
                  {route.name}
                </FooterLink>
              ))}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Cliente</FooterLinkTitle>
              {routesClient.map((route, index) => (
                <FooterLink key={index} to={route.link}>
                  {route.name}
                </FooterLink>
              ))}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
              {routesContact.map((route, index) => (
                <FooterContact key={index} target={route.target} href={route.link} rel="noreferrer">
                  {route.name}
                </FooterContact>
              ))}
              <FooterContactExtra>
                De Lunes a Domingo de 8:00 am a 7:00 pm
              </FooterContactExtra>
            </FooterLinkItems>
        </FooterGrid>
        <FooterRights>© 2022 Luisa’s Cake. Todos los derechos reservados.</FooterRights>
      </FooterWrapper>
    </Container>
  )
}

export default Footer
