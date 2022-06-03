import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterRights,
  FooterWrapper,
  FooterGrid,
  FooterContact
} from './FooterStyles'
import { routes, routesClient, routesContact } from '../../../data/RoutersData'
import { Section } from '../../../styles/globalStyles'

function Footer () {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
            <FooterLinkItems>
              <FooterLinkTitle>Luisa's Cake</FooterLinkTitle>
              {routes.map((route) => (
                <FooterLink key={route.name} to={route.link}>
                  {route.name}
                </FooterLink>
              ))}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Cliente</FooterLinkTitle>
              {routesClient.map((route) => (
                <FooterLink key={route.name} to={route.link}>
                  {route.name}
                </FooterLink>
              ))}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
              {routesContact.map((route) => (
                <FooterContact key={route.name} target={route.target} href={route.link} rel="noreferrer">
                  {route.name}
                </FooterContact>
              ))}
            </FooterLinkItems>
        </FooterGrid>
        <FooterRights>© 2022 Luisa’s Cake. Todos los derechos reservados.</FooterRights>
      </FooterWrapper>
    </Section>
  )
}

export default Footer
